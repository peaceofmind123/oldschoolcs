import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import { Lesson, LessonSection } from "@/content/lessons/data";

function rehypeEnhanceCodeBlocks() {
	return (tree: any) => {
		visit(tree, "element", (node, index, parent) => {
			if (!parent || index === undefined) return;
			if (node.tagName !== "pre") return;

			parent.children[index] = {
				type: "element",
				tagName: "div",
				properties: { className: ["lesson-code-block"] },
				children: [
					{
						type: "element",
						tagName: "button",
						properties: {
							className: ["lesson-copy-button"],
							type: "button",
							"aria-label": "Copy code"
						},
						children: [
							{
								type: "element",
								tagName: "svg",
								properties: {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									"stroke-linecap": "round",
									"stroke-linejoin": "round"
								},
								children: [
									{
										type: "element",
										tagName: "rect",
										properties: {
											width: "14",
											height: "14",
											x: "8",
											y: "8",
											rx: "2",
											ry: "2"
										},
										children: []
									},
									{
										type: "element",
										tagName: "path",
										properties: {
											d: "M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2"
										},
										children: []
									}
								]
							}
						]
					},
					node
				]
			};
		});
	};
}

const lessonsRoot = path.join(process.cwd(), "content", "lessons");

export type LessonSectionContent = LessonSection & {
	html: string;
};

export async function loadLessonSectionsContent(lesson: Lesson): Promise<LessonSectionContent[]> {
	return Promise.all(
		lesson.sections.map(async (section) => {
			if (!section.contentFile) {
				throw new Error(`Section "${section.title}" for lesson "${lesson.slug}" is missing a contentFile`);
			}
			const filePath = path.join(lessonsRoot, section.contentFile);
			if (!fs.existsSync(filePath)) {
				throw new Error(`Section content file not found: ${filePath}`);
			}
			const source = fs.readFileSync(filePath, "utf8");
			const html = await unified()
				.use(remarkParse)
				.use(remarkMath)
				.use(remarkRehype, { allowDangerousHtml: true })
				.use(rehypeRaw)
				.use(rehypeKatex)
				.use(rehypeEnhanceCodeBlocks)
				.use(rehypeStringify)
				.process(source);
			return {
				...section,
				html: String(html)
			};
		})
	);
}

