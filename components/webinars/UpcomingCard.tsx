import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";

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
    accentColor: string;
    background: string;
};

export function UpcomingCard({ tag, title, description, date, time, speaker, accentColor, background }: UpcomingCardProps) {
    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: 1,
                background,
                boxShadow: "0 35px 55px rgba(5,38,44,0.14)",
                border: "1px solid rgba(4,44,53,0.08)"
            }}
        >
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box
                    component="span"
                    sx={{
                        display: "inline-flex",
                        alignSelf: "flex-start",
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 600,
                        backgroundColor: accentColor,
                        color: "#042c35"
                    }}
                >
                    {tag}
                </Box>

                <Typography variant="h6" fontWeight={700} sx={{ color: "#052e35" }}>
                    {title}
                </Typography>

                <Typography variant="body2" sx={{ color: "rgba(5,46,53,0.8)", minHeight: 72 }}>
                    {description}
                </Typography>

                <Stack direction="row" spacing={1.5} fontSize={14} color="rgba(5,46,53,0.7)">
                    <span>{date}</span>
                    <Box sx={{ width: 4, height: 4, bgcolor: "rgba(5,46,53,0.4)", borderRadius: "50%", alignSelf: "center" }} />
                    <span>{time}</span>
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar src={speaker.avatar} alt={speaker.name} />
                        <Box>
                            <Typography fontWeight={600} fontSize={15}>
                                {speaker.name}
                            </Typography>
                            <Typography variant="caption" color="rgba(5,46,53,0.7)">
                                {speaker.role}
                            </Typography>
                        </Box>
                    </Stack>

                    <Button variant="contained" color="secondary" sx={{ color: "secondary.contrastText" }}>
                        Register
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}


