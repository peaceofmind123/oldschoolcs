import Link from "next/link";

export default function HomePage() {
	return (
		<main className="container">
			<h1 className="post-title">OldSchool CS</h1>
			<p className="post-meta">Deep-dive computer science articles with MDX + LaTeX.</p>
			<p>
				Start reading on the <Link href="/blog">blog</Link>.
			</p>
		</main>
	);
}


