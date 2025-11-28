import { lessons, Lesson } from "@/content/lessons/data";

export function getAllLessons(): Lesson[] {
	return lessons;
}

export function getLessonBySlug(slug: string): Lesson {
	const lesson = lessons.find((item) => item.slug === slug);
	if (!lesson) {
		throw new Error(`Lesson with slug "${slug}" not found`);
	}
	return lesson;
}

export function getLessonStaticParams() {
	return getAllLessons().map((lesson) => ({ slug: lesson.slug }));
}

export function getLessonNavigation(slug: string) {
	const all = getAllLessons();
	const index = all.findIndex((item) => item.slug === slug);
	return {
		prev: index > 0 ? all[index - 1] : null,
		next: index >= 0 && index < all.length - 1 ? all[index + 1] : null
	};
}

export type { Lesson, LessonSection } from "@/content/lessons/data";

