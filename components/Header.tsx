import Link from "next/link";

export function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
			<div className="container flex h-14 items-center justify-between">
				<Link href="/" className="flex items-center gap-2 font-semibold text-ink">
					<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-brand text-white text-xs">OS</span>
					<span>OldSchool CS</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6 text-sm text-ink-subtle">
					<Link href="/blog" className="hover:text-ink">Blog</Link>
					<Link href="/rss.xml" className="hover:text-ink">RSS</Link>
					<Link href="https://vercel.com" className="hover:text-ink">About</Link>
				</nav>
				<div className="flex items-center gap-3">
					<Link
						href="/blog"
						className="inline-flex items-center rounded-md bg-brand px-3 py-1.5 text-white text-sm font-medium shadow-sm hover:bg-brand-700"
					>
						Get started
					</Link>
				</div>
			</div>
		</header>
	);
}


