import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footerLinks = [
	{ title: "Curriculum", items: ["Algorithms", "Systems", "AI/ML", "Hardware"] },
	{ title: "Resources", items: ["Reading lists", "Labs", "Community", "Office hours"] },
	{ title: "About", items: ["Our story", "Team", "Support", "Contact"] }
];

export function SiteFooter() {
	return (
		<Box component="footer" sx={{ mt: 8, background: "#041f2b", color: "rgba(255,255,255,0.9)" }}>
			<Container sx={{ py: 6 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4}>
						<Typography variant="h6" fontWeight={700}>
							Old School CS
						</Typography>
						<Typography variant="body2" color="rgba(255,255,255,0.6)" sx={{ mt: 1 }}>
							An independent CS & engineering publication helping you reason about complex systems.
						</Typography>
					</Grid>
					{footerLinks.map((section) => (
						<Grid key={section.title} item xs={12} md={2}>
							<Typography fontWeight={600}>{section.title}</Typography>
							<Stack spacing={0.8} mt={1.5}>
								{section.items.map((item) => (
									<Typography key={item} variant="body2" color="rgba(255,255,255,0.7)">
										{item}
									</Typography>
								))}
							</Stack>
						</Grid>
					))}
				</Grid>

				<Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

				<Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="space-between" alignItems="center">
					<Typography variant="caption" color="rgba(255,255,255,0.6)">
						© {new Date().getFullYear()} Ashish Paudel. All rights reserved.
					</Typography>
					<Stack direction="row" spacing={1}>
						<IconButton size="small" sx={{ color: "rgba(255,255,255,0.9)" }}>
							<TwitterIcon fontSize="small" />
						</IconButton>
						<IconButton size="small" sx={{ color: "rgba(255,255,255,0.9)" }}>
							<LinkedInIcon fontSize="small" />
						</IconButton>
						<IconButton size="small" sx={{ color: "rgba(255,255,255,0.9)" }}>
							<YouTubeIcon fontSize="small" />
						</IconButton>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}


