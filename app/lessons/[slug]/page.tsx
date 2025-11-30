import Link from "next/link";
import { Button, Card, Container, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LessonLayout } from "@/components/lessons/LessonLayout";
import { getLessonNavigation, getLessonStaticParams } from "@/lib/lessons";
import { getLessonWithContent } from "@/lib/lesson-content";

export function generateStaticParams() {
	return getLessonStaticParams();
}

export default async function LessonDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const { lesson, sections } = await getLessonWithContent(slug);
	const { prev, next } = getLessonNavigation(slug);

	return (
		<Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
			<Card
				sx={{
					p: { xs: 2, md: 3 },
					borderRadius: 3,
					boxShadow: "0 30px 50px rgba(12,36,51,0.08)",
					bgcolor: "#ffffff"
				}}
			>
				<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
					<Link href="/" style={{ textDecoration: "none" }}>
						<Button startIcon={<ArrowBackIosNewIcon fontSize="small" />}>Back to library</Button>
					</Link>
					<Stack direction="row" spacing={1.5}>
						<Button variant="outlined" color="inherit" startIcon={<ShareIcon fontSize="small" />}>
							Share
						</Button>
						<Button variant="contained" color="primary">
							Begin lesson
						</Button>
					</Stack>
				</Stack>

				<LessonLayout lesson={lesson} sections={sections} />

				<Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }} flexWrap="wrap" gap={2}>
					{prev ? (
						<Link href={`/lessons/${prev.slug}`} style={{ textDecoration: "none" }}>
							<Button startIcon={<ArrowBackIosNewIcon fontSize="small" />}>Previous lesson</Button>
						</Link>
					) : (
						<Button disabled startIcon={<ArrowBackIosNewIcon fontSize="small" />}>
							Previous lesson
						</Button>
					)}
					{next ? (
						<Link href={`/lessons/${next.slug}`} style={{ textDecoration: "none" }}>
							<Button endIcon={<ArrowForwardIcon fontSize="small" />}>Next lesson</Button>
						</Link>
					) : (
						<Button disabled endIcon={<ArrowForwardIcon fontSize="small" />}>
							Next lesson
						</Button>
					)}
				</Stack>
			</Card>
		</Container>
	);
}


