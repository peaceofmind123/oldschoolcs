import Link from "next/link";
import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";

type WebinarCardProps = {
	tag: string;
	title: string;
	date: string;
	description: string;
	speaker: string;
	avatar: string;
	accent: string;
};

export function WebinarCard({ tag, title, date, description, speaker, avatar, accent }: WebinarCardProps) {
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
						backgroundColor: accent,
						color: "#05262c"
					}}
				>
					{tag}
				</Box>

				<Typography variant="h6" fontSize={19} fontWeight={600}>
					{title}
				</Typography>

				<Typography variant="caption" color="text.secondary">
					{date}
				</Typography>

				<Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
					{description}
				</Typography>

				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Stack direction="row" spacing={1.2} alignItems="center">
						<Avatar src={avatar} alt={speaker} sx={{ width: 36, height: 36 }} />
						<Typography fontSize={14} fontWeight={600}>
							{speaker}
						</Typography>
					</Stack>
					<Button component={Link} href="/lesson" size="small">
						Open lesson
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
}


