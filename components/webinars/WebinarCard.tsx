import Link from "next/link";
import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { Lesson } from "@/lib/lessons";

type WebinarCardProps = {
	lesson: Lesson;
};

export function WebinarCard({ lesson }: WebinarCardProps) {
	return (
		<Card
			variant="outlined"
			sx={{
				height: "100%",
				borderRadius: 1,
				borderColor: "rgba(6, 54, 64, 0.08)",
				boxShadow: "0 20px 35px rgba(5,38,44,0.05)"
			}}
		>
			<CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
				<Box
					component="span"
					sx={{
						display: "inline-flex",
						alignSelf: "flex-start",
						padding: "2px 10px",
						borderRadius: 999,
						fontSize: 11,
						fontWeight: 600,
						backgroundColor: "rgba(15,35,52,0.1)",
						color: "#05262c"
					}}
				>
					{lesson.category}
				</Box>

				<Typography variant="h6" fontSize={19} fontWeight={600}>
					{lesson.title}
				</Typography>

				<Typography variant="caption" color="text.secondary">
					{lesson.metrics.lessons} lessons · {lesson.metrics.duration}
				</Typography>

				<Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
					{lesson.summary}
				</Typography>

				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Stack direction="row" spacing={1.2} alignItems="center">
						<Avatar src={lesson.author.avatar} alt={lesson.author.name} sx={{ width: 36, height: 36 }} />
						<Typography fontSize={14} fontWeight={600}>
							{lesson.author.name}
						</Typography>
					</Stack>
					<Button component={Link} href={`/lessons/${lesson.slug}`} size="small">
						Open lesson
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
}


