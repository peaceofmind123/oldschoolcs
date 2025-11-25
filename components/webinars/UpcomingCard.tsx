import { Box, Button, Card, Stack, Typography } from "@mui/material";

type UpcomingCardProps = {
    tag: string;
    title: string;
    description: string;
    date: string;
    time: string;
    speaker: {
        name: string;
        role: string;
        avatar: string;
    };
    background: string;
    categoryTag?: string;
    coverImage: string;
};

export function UpcomingCard({ tag, title, description, date, time, speaker, background, categoryTag, coverImage }: UpcomingCardProps) {
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
                    gridTemplateColumns: { xs: "1fr", md: "1fr 0.45fr" },
                    gap: { xs: 2.5, md: 3.5 },
                    bgcolor: background,
                    p: { xs: 3, md: 4 }
                }}
            >
                <Box>
                    <Typography variant="h5" fontWeight={600} sx={{ color: "#052e35", whiteSpace: "pre-line" }}>
                        {tag}
                    </Typography>
                    {categoryTag ? (
                        <Box
                            component="span"
                            sx={{
                                display: "inline-flex",
                                padding: "2px 14px",
                                borderRadius: 1,
                                fontSize: 12,
                                fontWeight: 600,
                                backgroundColor: "rgba(4,44,53,0.08)",
                                color: "rgba(4,44,53,0.7)",
                                mt: 2
                            }}
                        >
                            {categoryTag}
                        </Box>
                    ) : null}
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        minHeight: 180,
                        borderRadius: 1,
                        overflow: "hidden",
                        background: "linear-gradient(145deg,#7ac3e3,#2c819d)"
                    }}
                >
                    <Box component="img" src={coverImage} alt={speaker.name} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.7))" }} />
                    <Box sx={{ position: "absolute", bottom: 12, left: 12, right: 12, color: "#fff" }}>
                        <Typography fontWeight={600}>{speaker.name}</Typography>
                        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
                            {speaker.role}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1, bgcolor: "#fff", px: { xs: 3, md: 4 }, py: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Stack direction="row" spacing={1.5} fontSize={14} color="rgba(5,46,53,0.7)">
                    <span>{date}</span>
                    <Box sx={{ width: 4, height: 4, bgcolor: "rgba(5,46,53,0.4)", borderRadius: "50%", alignSelf: "center" }} />
                    <span>{time}</span>
                </Stack>

                <Typography variant="h6" fontWeight={700}>
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {description}
                </Typography>

                <Button variant="contained" color="primary" sx={{ alignSelf: "flex-start", mt: 1 }}>
                    Register
                </Button>
            </Box>
        </Card>
    );
}


