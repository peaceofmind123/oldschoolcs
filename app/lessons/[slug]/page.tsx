import { LessonPageClient } from "./LessonPageClient";
import { getLessonNavigation, getLessonStaticParams } from "@/lib/lessons";
import { getLessonWithContent } from "@/lib/lesson-content";

export function generateStaticParams() {
	return getLessonStaticParams();
}

export default async function LessonDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const { lesson, sections } = await getLessonWithContent(slug);
	const { prev, next } = getLessonNavigation(slug);

	return <LessonPageClient lesson={lesson} sections={sections} prev={prev} next={next} />;
}
