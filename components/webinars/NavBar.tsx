"use client";

import Link from "next/link";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";

const links = ["Developer", "Webinar", "Pricing", "Library"];

export function NavBar() {
	return (
		<AppBar position="static" color="transparent" elevation={0} sx={{ py: 1 }}>
			<Container>
				<Toolbar disableGutters sx={{ gap: 4, minHeight: 72 }}>
					<Link href="/" style={{ textDecoration: "none" }}>
						<Stack direction="row" spacing={1.5} alignItems="center">
							<Box
								sx={{
									width: 36,
									height: 36,
									borderRadius: "50%",
									background: "linear-gradient(135deg, #72f5dc, #45bfa0)",
									color: "#063640",
									fontWeight: 700,
									display: "grid",
									placeItems: "center"
								}}
							>
								S
							</Box>
							<Typography fontWeight={700} color="text.primary">
								SoftQA
							</Typography>
						</Stack>
					</Link>

					<Stack direction="row" spacing={3} sx={{ ml: 4, display: { xs: "none", md: "flex" } }}>
						{links.map((link) => (
							<Link key={link} href="#" style={{ textDecoration: "none", color: "inherit" }}>
								<Typography color="text.secondary" sx={{ fontSize: 15, "&:hover": { color: "text.primary" } }}>
									{link}
								</Typography>
							</Link>
						))}
					</Stack>

					<Stack direction="row" spacing={1.5} sx={{ ml: "auto" }}>
						<Button variant="outlined" color="inherit" sx={{ borderRadius: 1 }}>
							Sign in
						</Button>
						<Button variant="contained">Get started</Button>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
}


