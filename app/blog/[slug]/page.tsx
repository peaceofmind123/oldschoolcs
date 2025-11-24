import type { Metadata } from "next";
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx";

type PageProps = {
	params: { slug: string }
};

export async function generateStaticParams() {
	const posts = await getAllPostsMeta();
	return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const posts = await getAllPostsMeta();
	const found = posts.find((p) => p.slug === params.slug);
	return {
		title: found ? `${found.title} | OldSchool CS` : "Post | OldSchool CS",
		description: found?.description
	};
}

export default async function BlogPostPage({ params }: PageProps) {
	const { meta, Content } = await getPostBySlug(params.slug);
	return (
		<main className="container">
			<h1 className="post-title">{meta.title}</h1>
			<div className="post-meta">
				<time dateTime={meta.date}>{new Date(meta.date).toLocaleDateString()}</time>
				{meta.tags?.length ? ` · ${meta.tags.join(", ")}` : null}
			</div>
			<article className="prose prose-zinc dark:prose-invert">
				{/* Content is a React component produced by MDX compile */}
				<Content />
			</article>
		</main>
	);
}


