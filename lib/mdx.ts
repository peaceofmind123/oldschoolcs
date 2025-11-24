import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ComponentType } from "react";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
	title: string;
	slug: string;
	date: string; // ISO
	description?: string;
	tags?: string[];
};

export async function getAllPostsMeta(): Promise<PostMeta[]> {
	const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
	const mdxFiles = entries.filter((e) => e.isFile() && e.name.endsWith(".mdx"));
	const metas: PostMeta[] = [];
	for (const f of mdxFiles) {
		const full = path.join(POSTS_DIR, f.name);
		const raw = await fs.readFile(full, "utf8");
		const fm = matter(raw);
		const slug = f.name.replace(/\.mdx$/, "");
		const meta = {
			title: fm.data.title as string,
			slug,
			date: (fm.data.date as string) ?? new Date().toISOString(),
			description: fm.data.description as string | undefined,
			tags: (fm.data.tags as string[] | undefined) ?? []
		};
		metas.push(meta);
	}
	metas.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return metas;
}

export async function getPostBySlug(slug: string): Promise<{
	meta: PostMeta;
	Content: ComponentType;
}> {
	const full = path.join(POSTS_DIR, `${slug}.mdx`);
	const raw = await fs.readFile(full, "utf8");
	const fm = matter(raw);
	const meta: PostMeta = {
		title: (fm.data.title as string) ?? slug,
		slug,
		date: (fm.data.date as string) ?? new Date().toISOString(),
		description: fm.data.description as string | undefined,
		tags: (fm.data.tags as string[] | undefined) ?? []
	};
	const { content, frontmatter } = fm;
	const compiled = await compileMDX({
		source: content,
		options: {
			mdxOptions: {
				remarkPlugins: [remarkMath],
				rehypePlugins: [
					rehypeKatex,
					[
						rehypePrettyCode,
						{
							theme: {
								dark: "github-dark",
								light: "github-light"
							},
							keepBackground: false
						}
					]
				]
			}
		}
	});
	return {
		meta: { ...meta, ...(frontmatter as Record<string, unknown>) } as PostMeta,
		Content: compiled.content
	};
}


