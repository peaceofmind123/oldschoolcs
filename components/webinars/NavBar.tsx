"use client";

import Link from "next/link";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";

const links = [
	{ label: "Home", href: "/" },
	{ label: "Blog", href: "/blog" },
	{ label: "About", href: "/about" }
];

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
									background: "linear-gradient(135deg, #0d4c5b, #176d7a)",
									color: "#f4fbfa",
									fontWeight: 700,
									display: "grid",
									placeItems: "center"
								}}
							>
								OS
							</Box>
							<Typography fontWeight={700} color="text.primary">
								Old School CS
							</Typography>
						</Stack>
					</Link>

					<Stack direction="row" spacing={3} sx={{ ml: 4, display: { xs: "none", md: "flex" } }}>
						{links.map((link) => (
							<Link key={link.label} href={link.href} style={{ textDecoration: "none", color: "inherit" }}>
								<Typography color="text.secondary" sx={{ fontSize: 15, "&:hover": { color: "text.primary" } }}>
									{link.label}
								</Typography>
							</Link>
						))}
					</Stack>

					<Stack direction="row" spacing={1.5} sx={{ ml: "auto" }}>
						<Button variant="outlined" color="inherit" sx={{ borderRadius: 1 }}>
							Get in Touch
						</Button>
						<Button variant="contained">Subscribe</Button>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
}


