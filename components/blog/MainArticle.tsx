import Image from "next/image";
import Link from "next/link";
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";

type MainArticleProps = {
	href: string;
	title: string;
	excerpt: string;
	image: string;
	author: string;
	date: string;
};

export function MainArticle({ href, title, excerpt, image, author, date }: MainArticleProps) {
	return (
		<Card variant="outlined">
			<CardActionArea component={Link} href={href} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" } }}>
				<Box sx={{ position: "relative", aspectRatio: { xs: "16 / 9", md: "4 / 3" } }}>
					<Image src={image} alt="" fill style={{ objectFit: "cover" }} />
				</Box>
				<CardContent sx={{ p: { xs: 2, md: 3 } }}>
					<Typography variant="h6" fontWeight={700} gutterBottom>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{excerpt}
					</Typography>
					<Stack direction="row" spacing={1} sx={{ mt: 2 }}>
						<Typography variant="caption" color="text.secondary">
							{author}
						</Typography>
						<Typography variant="caption" color="text.secondary">
							·
						</Typography>
						<Typography variant="caption" color="text.secondary">
							{date}
						</Typography>
					</Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}


