import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
	href: string;
	title: string;
	excerpt: string;
	image: string;
	author?: string;
	date?: string;
	tags?: string[];
	featured?: boolean;
};

export function ArticleCard(props: ArticleCardProps) {
	if (props.featured) {
		return (
			<Link href={props.href} className="group relative block overflow-hidden rounded-2xl shadow-card">
				<Image
					src={props.image}
					alt=""
					width={1600}
					height={900}
					className="h-[420px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
				<div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
					<p className="text-meta opacity-90">Resources › Design & Photography</p>
					<h2 className="mt-2 text-display leading-tight">Sophia Mesabhi from Untitled Ventures on Sustainable and Profitable Growth</h2>
					<div className="mt-3 flex items-center gap-3 text-xs opacity-90">
						<span>{props.author ?? "Frankie Sullivan"}</span>
						<span>·</span>
						<time>{props.date ?? "10 April 2025"}</time>
					</div>
				</div>
			</Link>
		);
	}

	return (
		<Link href={props.href} className="group overflow-hidden rounded-xl border border-border bg-surface shadow-card">
			<div className="aspect-[4/3] w-full overflow-hidden">
				<Image
					src={props.image}
					alt=""
					width={800}
					height={600}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-[15px] font-semibold leading-snug text-ink group-hover:text-brand">
					{props.title}
				</h3>
				<p className="mt-2 line-clamp-3 text-sm text-ink-subtle">{props.excerpt}</p>
				<div className="mt-3 text-xs text-ink-subtle">
					{props.author ?? "Deni Wilkenson"} · {props.date ?? "Jan 9, 2025"}
				</div>
			</div>
		</Link>
	);
}


