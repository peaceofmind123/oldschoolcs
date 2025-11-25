import { Box, Container, Grid, Link as MuiLink, Stack, Typography } from "@mui/material";

export function JournalFooter() {
	return (
		<Box component="footer" sx={{ mt: 6, bgcolor: "#ffe500" }}>
			<Container sx={{ py: 6 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={3}>
						<Stack spacing={1}>
							<Typography fontWeight={700}>Untitled UI</Typography>
							<Typography variant="body2" color="text.secondary">
								Design amazing digital experiences that create more happy in the world.
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} md={2}>
						<Typography fontWeight={700} sx={{ mb: 1 }}>
							Product
						</Typography>
						<FooterList items={["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"]} />
					</Grid>
					<Grid item xs={6} md={2}>
						<Typography fontWeight={700} sx={{ mb: 1 }}>
							Company
						</Typography>
						<FooterList items={["About us", "Careers", "Press", "News", "Media kit", "Contact"]} />
					</Grid>
					<Grid item xs={6} md={2}>
						<Typography fontWeight={700} sx={{ mb: 1 }}>
							Resources
						</Typography>
						<FooterList items={["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]} />
					</Grid>
					<Grid item xs={6} md={3}>
						<Typography fontWeight={700} sx={{ mb: 1 }}>
							Social
						</Typography>
						<FooterList items={["Twitter", "LinkedIn", "Facebook", "GitHub", "Dribbble"]} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

function FooterList({ items }: { items: string[] }) {
	return (
		<Stack spacing={1}>
			{items.map((item) => (
				<MuiLink key={item} color="text.primary" underline="hover" href="#">
					{item}
				</MuiLink>
			))}
		</Stack>
	);
}



