import Link from "next/link";
import { Box, Button, Container, Stack } from "@mui/material";
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
		<Box sx={{ bgcolor: "#f8fbfa" }}>
			<Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}>
				<Stack spacing={{ xs: 2.5, md: 3.5 }}>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
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

					<Box>
						<LessonLayout lesson={lesson} sections={sections} />
					</Box>

					<Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={2}>
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
				</Stack>
			</Container>
		</Box>
	);
}


