export function Footer() {
	return (
		<footer className="mt-16 border-t border-border bg-surface">
			<div className="container py-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-ink-subtle">
					<div>
						<h3 className="mb-3 font-semibold text-ink">Product</h3>
						<ul className="space-y-2">
							<li>Overview</li>
							<li>Features</li>
							<li>Pricing</li>
							<li>Releases</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-3 font-semibold text-ink">Company</h3>
						<ul className="space-y-2">
							<li>About</li>
							<li>Careers</li>
							<li>Press</li>
							<li>Contact</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-3 font-semibold text-ink">Resources</h3>
						<ul className="space-y-2">
							<li>Docs</li>
							<li>Guides</li>
							<li>FAQ</li>
							<li>Support</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-3 font-semibold text-ink">Social</h3>
						<ul className="space-y-2">
							<li>Twitter</li>
							<li>GitHub</li>
							<li>LinkedIn</li>
							<li>RSS</li>
						</ul>
					</div>
				</div>
				<div className="mt-10 flex items-center justify-between text-xs text-ink-subtle">
					<span>© {new Date().getFullYear()} OldSchool CS. All rights reserved.</span>
					<span>Built with Next.js</span>
				</div>
			</div>
		</footer>
	);
}


