import Link from "next/link";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Lesson } from "@/lib/lessons";

type UpcomingCardProps = {
	lesson: Lesson;
};

export function UpcomingCard({ lesson }: UpcomingCardProps) {
    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: 1,
                border: "1px solid rgba(4,44,53,0.08)",
                boxShadow: "0 35px 55px rgba(5,38,44,0.14)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                    alignItems: "stretch",
                    gap: { xs: 2.5, md: 3.5 },
                    bgcolor: "rgba(4, 44, 53, 0.03)",
                    p: { xs: 3, md: 4 }
                }}
            >
				<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 1.5 }}>
                    <Typography
                        variant="h4"
                        fontWeight={600}
                        sx={{ color: "#052e35", whiteSpace: "pre-line", fontSize: { xs: "1.5rem", sm: "1.9rem", md: "2.125rem" } }}
                    >
						{lesson.tagline}
                    </Typography>
					{lesson.category ? (
                        <Box
                            component="span"
                            sx={{
                                display: "inline-flex",
                                padding: "2px 12px",
                                borderRadius: 1,
                                fontSize: 12,
                                fontWeight: 600,
                                alignSelf: "flex-start",
                                backgroundColor: "rgba(4,44,53,0.08)",
								color: "rgba(4,44,53,0.7)"
                            }}
                        >
							{lesson.category}
                        </Box>
                    ) : null}
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        minHeight: 180,
                        maxHeight: 220,
                        borderRadius: 1,
                        overflow: "hidden",
						background: "linear-gradient(145deg,#7ac3e3,#2c819d)"
                    }}
                >
					<Box component="img" src={lesson.heroImage} alt={lesson.author.name} sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.7))" }} />
                    <Box sx={{ position: "absolute", bottom: 12, left: 12, right: 12, color: "#fff" }}>
						<Typography fontWeight={600}>{lesson.author.name}</Typography>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
							{lesson.author.role}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1, bgcolor: "#fff", px: { xs: 3, md: 4 }, py: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", gap: 1.5 }}>
				<Typography fontSize={14} color="rgba(5,46,53,0.7)">
					{lesson.metrics.lessons} lessons · {lesson.metrics.duration}
				</Typography>
                <Typography variant="h6" fontWeight={700}>
					{lesson.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
					{lesson.summary}
                </Typography>

				<Button component={Link} href={`/lessons/${lesson.slug}`} variant="contained" color="primary" sx={{ alignSelf: "flex-start", mt: 1 }}>
					Learn
				</Button>
            </Box>
        </Card>
    );
}


