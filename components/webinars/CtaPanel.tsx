import { Box, Button, Container, Stack, Typography } from "@mui/material";

export function CtaPanel() {
	return (
		<Box
			sx={{
				mt: 8,
				background: "linear-gradient(135deg, #0b3d4d, #081f2b)",
				borderRadius: 1,
				color: "#f4fbfa",
				overflow: "hidden",
				position: "relative",
				py: { xs: 6, md: 8 }
			}}
		>
			<Box
				sx={{
					position: "absolute",
					inset: 0,
					backgroundImage: `radial-gradient(circle at 20% 20%, rgba(97,224,197,0.25), transparent 45%),
						radial-gradient(circle at 80% 10%, rgba(12,116,123,0.4), transparent 45%),
						url("data:image/svg+xml,%3Csvg width='400' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='0.5'%3E%3Cpath d='M0 160 Q200 80 400 160'/%3E%3Cpath d='M0 150 Q200 70 400 150'/%3E%3Cpath d='M0 140 Q200 60 400 140'/%3E%3C/g%3E%3C/svg%3E")`,
					opacity: 0.8,
					pointerEvents: "none"
				}}
			/>
			<Container sx={{ position: "relative" }}>
				<Stack spacing={2} maxWidth={560}>
					<Typography variant="overline" sx={{ letterSpacing: ".2em", color: "rgba(244,251,250,0.7)" }}>
						Stay curious
					</Typography>
					<Typography
						variant="h4"
						fontWeight={700}
						sx={{ fontSize: { xs: "1.6rem", sm: "2rem", md: "2.2rem" }, lineHeight: 1.2 }}
					>
						Get the Old School CS newsletter
					</Typography>
					<Typography color="rgba(244,251,250,0.75)">
						Weekly breakdowns of tricky CS and engineering concepts, lab exercises, and reading lists delivered straight to your
						inbox.
					</Typography>
					<Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={2}>
						<Button variant="contained" color="secondary" size="large" sx={{ color: "secondary.contrastText" }}>
							Subscribe free
						</Button>
						<Button variant="outlined" color="inherit" size="large">
							Preview an issue
						</Button>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}


