import Image from "next/image";
import Link from "next/link";

export function Hero() {
	return (
		<section className="container my-10 md:my-12">
			{/* Breadcrumb pills */}
			<div className="flex items-center gap-2 text-meta">
				<Link href="#" className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-ink-subtle hover:text-ink">
					Resources
				</Link>
				<span className="text-ink-subtle">›</span>
				<Link href="#" className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-brand hover:underline">
					Design & Photography
				</Link>
			</div>

			{/* Title + description */}
			<h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-ink">
				Untitled Design & Photography Journal
			</h1>
			<p className="mt-3 max-w-4xl text-[17px] leading-7 text-ink-subtle">
				The Untitled UI Journal features carefully selected good works from studios, designers, architects,
				photographers, and creators from all around the globe. Subscribe for new posts in your inbox.
			</p>

			{/* Hero image with overlay caption */}
			<div className="mt-6 overflow-hidden rounded-xl border border-border">
				<div className="relative">
					<Image
						src="/img1.jpg"
						alt=""
						width={1600}
						height={900}
						className="h-[460px] w-full object-cover md:h-[520px]"
						priority
					/>
					{/* gradient overlay */}
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

					{/* caption block */}
					<div className="absolute inset-x-0 bottom-0 px-4 pb-4 md:px-6 md:pb-6">
						<div className="max-w-5xl text-white drop-shadow">
							<h2 className="text-2xl md:text-3xl font-semibold leading-snug">
								Sophia Mesabhi from Untitled Ventures on Sustainable and Profitable Growth & What We Can Learn From
								the Gumroad Mess
							</h2>
							<div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs opacity-95">
								<div className="flex items-center gap-2">
									<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">F</span>
									<span>Frankie Sullivan</span>
								</div>
								<div className="h-1 w-1 rounded-full bg-white/70" />
								<time>10 April 2025</time>
								<div className="ml-auto flex items-center gap-2">
									<span className="rounded-full bg-white/10 px-2.5 py-1 ring-1 ring-white/20">Design</span>
									<span className="rounded-full bg-white/10 px-2.5 py-1 ring-1 ring-white/20">Retail</span>
									<span className="rounded-full bg_white/10 px-2.5 py-1 ring-1 ring-white/20">Interviews</span>
									<span className="rounded-full bg-white/10 px-2.5 py-1 ring-1 ring-white/20">12 min read</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


