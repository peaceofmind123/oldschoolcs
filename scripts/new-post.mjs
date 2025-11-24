import fs from "node:fs/promises";
import path from "node:path";

function slugify(input) {
	return input
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}

async function main() {
	const args = process.argv.slice(2);
	if (args.length === 0) {
		console.error("Usage: npm run new:post -- \"Title of Post\" [slug]");
		process.exit(1);
	}
	const title = args[0];
	const slug = args[1] ? slugify(args[1]) : slugify(title);
	const today = new Date();
	const date = today.toISOString().slice(0, 10);
	const postsDir = path.join(process.cwd(), "content", "posts");
	await fs.mkdir(postsDir, { recursive: true });
	const target = path.join(postsDir, `${slug}.mdx`);
	const yaml = `---
title: "${title}"
date: "${date}"
description: ""
tags: []
---

Write your introduction here.

Inline math: \\( a^2 + b^2 = c^2 \\)

$$
\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}
$$
`;
	try {
		await fs.writeFile(target, yaml, { flag: "wx" });
		console.log(`Created: ${target}`);
	} catch (err) {
		if (err && err.code === "EEXIST") {
			console.error(`File already exists: ${target}`);
			process.exit(1);
		}
		throw err;
	}
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});


