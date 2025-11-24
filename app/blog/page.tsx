import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";

export const metadata = {
	title: "Blog | OldSchool CS",
	description: "All blog posts"
};

export default async function BlogIndexPage() {
	const posts = await getAllPostsMeta();
	return (
		<main className="container">
			<h1 className="post-title">Blog</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.slug} style={{ marginBottom: "1rem" }}>
						<Link href={`/blog/${post.slug}`}>
							<strong>{post.title}</strong>
						</Link>
						<div className="post-meta">
							<time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
							{post.description ? ` · ${post.description}` : null}
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}


