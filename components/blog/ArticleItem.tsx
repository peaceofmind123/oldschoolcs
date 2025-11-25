import Image from "next/image";
import Link from "next/link";
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";

type ArticleItemProps = {
	href: string;
	title: string;
	excerpt: string;
	image: string;
	author?: string;
	date?: string;
};

export function ArticleItem({ href, title, excerpt, image, author = "Demo Author", date = "Jan 2025" }: ArticleItemProps) {
	return (
		<Card variant="outlined" sx={{ height: "100%" }}>
			<CardActionArea component={Link} href={href}>
				<Box sx={{ position: "relative", aspectRatio: "4 / 3" }}>
					<Image src={image} alt="" fill style={{ objectFit: "cover" }} />
				</Box>
				<CardContent>
					<Typography fontWeight={600} sx={{ mb: 0.5 }}>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{excerpt}
					</Typography>
					<Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1.5 }}>
						{author} · {date}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}



