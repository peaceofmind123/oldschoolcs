import { Box, Container, Link as MuiLink, Stack, Typography } from "@mui/material";

export function JournalFooter() {
	return (
		<Box component="footer" sx={{ mt: 6, bgcolor: "#ffe500" }}>
			<Container sx={{ py: 6 }}>
				<Box
					sx={{
						display: "grid",
						gap: { xs: 3, md: 4 },
						gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", md: "minmax(0, 2fr) repeat(4, minmax(0, 1fr))" }
					}}
				>
					<Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
						<Stack spacing={1}>
							<Typography fontWeight={700}>Untitled UI</Typography>
							<Typography variant="body2" color="text.secondary">
								Design amazing digital experiences that create more happy in the world.
							</Typography>
						</Stack>
					</Box>
					<Box>
						<Typography fontWeight={700} sx={{ mb: 1 }}>
							Product
						</Typography>
						<FooterList items={["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"]} />
					</Box>
					<Box>
						<Typography fontWeight={700} sx={{ mb: 1 }}>
							Company
						</Typography>
						<FooterList items={["About us", "Careers", "Press", "News", "Media kit", "Contact"]} />
					</Box>
					<Box>
						<Typography fontWeight={700} sx={{ mb: 1 }}>
							Resources
						</Typography>
						<FooterList items={["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]} />
					</Box>
					<Box>
						<Typography fontWeight={700} sx={{ mb: 1 }}>
							Social
						</Typography>
						<FooterList items={["Twitter", "LinkedIn", "Facebook", "GitHub", "Dribbble"]} />
					</Box>
				</Box>
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



