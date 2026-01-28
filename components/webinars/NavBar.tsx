"use client";

import React from "react";
import Link from "next/link";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
	{ label: "Home", href: "/" },
	{ label: "Blog", href: "/blog" },
	{ label: "About", href: "/about" }
];

export function NavBar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const menuOpen = Boolean(anchorEl);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static" color="transparent" elevation={0} sx={{ py: { xs: 0.5, sm: 1 } }}>
			<Container>
				<Toolbar disableGutters sx={{ gap: { xs: 2, md: 4 }, minHeight: { xs: 64, md: 72 } }}>
					<Link href="/" style={{ textDecoration: "none" }}>
						<Stack direction="row" spacing={1.5} alignItems="center">
							<Box
								sx={{
									width: { xs: 28, sm: 32, md: 36 },
									height: { xs: 28, sm: 32, md: 36 },
									minWidth: { xs: 28, sm: 32, md: 36 },
									minHeight: { xs: 28, sm: 32, md: 36 },
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
							<Typography fontWeight={700} color="text.primary" sx={{ fontSize: { xs: 14, sm: 16 } }}>
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

					<Stack direction="row" spacing={1.5} sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
						<Button
							variant="outlined"
							color="inherit"
							size="small"
							sx={{ borderRadius: 1, fontSize: 14, px: 2, py: 0.75 }}
						>
							Get in Touch
						</Button>
						<Button variant="contained" size="small" sx={{ fontSize: 14, px: 2.25, py: 0.75 }}>
							Subscribe
						</Button>
					</Stack>

					<Box sx={{ ml: "auto", display: { xs: "flex", md: "none" } }}>
						<IconButton aria-label="Open menu" onClick={handleMenuOpen} size="small">
							<MenuIcon />
						</IconButton>
					</Box>

					<Menu
						anchorEl={anchorEl}
						open={menuOpen}
						onClose={handleMenuClose}
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						transformOrigin={{ vertical: "top", horizontal: "right" }}
					>
						{links.map((link) => (
							<MenuItem key={link.label} component={Link} href={link.href} onClick={handleMenuClose}>
								{link.label}
							</MenuItem>
						))}
						<MenuItem onClick={handleMenuClose}>
							Get in Touch
						</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							Subscribe
						</MenuItem>
					</Menu>
				</Toolbar>
			</Container>
		</AppBar>
	);
}


