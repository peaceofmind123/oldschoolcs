type BadgeProps = {
	children: string;
};

export function Badge({ children }: BadgeProps) {
	return (
		<span className="inline-flex items-center rounded-full bg-surface-alt px-2.5 py-1 text-meta font-medium text-ink-subtle ring-1 ring-border">
			{children}
		</span>
	);
}


