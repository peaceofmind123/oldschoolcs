import { Feed } from "feed";
import { NextResponse } from "next/server";
import { getAllPostsMeta } from "@/lib/mdx";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
	const siteUrl = "https://oldschoolcs.com";
	const feed = new Feed({
		title: "OldSchool CS",
		description: "Technical computer science articles",
		id: siteUrl,
		link: siteUrl,
		language: "en",
		favicon: `${siteUrl}/favicon.ico`,
		copyright: `All rights reserved ${new Date().getFullYear()}, OldSchool CS`,
		generator: "Feed for Node.js"
	});

	const posts = await getAllPostsMeta();
	for (const post of posts) {
		const url = `${siteUrl}/blog/${post.slug}`;
		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			date: new Date(post.date),
			description: post.description,
			category: post.tags?.map((t) => ({ name: t }))
		});
	}

	const rss = feed.rss2();
	return new NextResponse(rss, {
		status: 200,
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
			"Cache-Control": "public, s-maxage=3600, max-age=3600, stale-while-revalidate=300"
		}
	});
}


