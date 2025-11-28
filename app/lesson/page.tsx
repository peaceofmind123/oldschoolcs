import { redirect } from "next/navigation";
import { getAllLessons } from "@/lib/lessons";

export default function LegacyLessonPage() {
	const [first] = getAllLessons();
	if (!first) {
		return null;
	}
	redirect(`/lessons/${first.slug}`);
}
