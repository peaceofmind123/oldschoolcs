import type { Metadata } from "next";
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
	const posts = await getAllPostsMeta();
	return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const posts = await getAllPostsMeta();
	const found = posts.find((p) => p.slug === slug);
	return {
		title: found ? `${found.title} | OldSchool CS` : "Post | OldSchool CS",
		description: found?.description
	};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const { meta, Content } = await getPostBySlug(slug);
	return (
		<main className="container">
			<h1 className="post-title">{meta.title}</h1>
			<div className="post-meta">
				<time dateTime={meta.date}>{new Date(meta.date).toLocaleDateString()}</time>
				{meta.tags?.length ? ` · ${meta.tags.join(", ")}` : null}
			</div>
			<article className="prose prose-zinc dark:prose-invert">
				{Content}
			</article>
		</main>
	);
}


