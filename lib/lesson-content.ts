import { Lesson } from "@/content/lessons/data";
import { loadLessonSectionsContent, LessonSectionContent } from "@/lib/mdx-lessons";
import { getLessonBySlug } from "@/lib/lessons";

export async function getLessonWithContent(slug: string): Promise<{ lesson: Lesson; sections: LessonSectionContent[] }> {
	const lesson = getLessonBySlug(slug);
	const sections = await loadLessonSectionsContent(lesson);
	return { lesson, sections };
}

export type { LessonSectionContent } from "@/lib/mdx-lessons";

