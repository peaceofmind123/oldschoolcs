import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { Lesson, LessonSection } from "@/content/lessons/data";

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
				.use(rehypeStringify)
				.process(source);
			return {
				...section,
				html: String(html)
			};
		})
	);
}

