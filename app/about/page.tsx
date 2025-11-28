"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, Box, Button, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { NavBar } from "@/components/webinars/NavBar";

const contactHighlights = [
	{
		label: "Contact",
		title: "Any type of query & discussion",
		body: "Happy to collaborate on complex systems, design reviews, or storytelling workshops.",
		link: "mailto:hello@oldschoolcs.com",
		linkLabel: "hello@oldschoolcs.com",
		accent: "#f6b348"
	},
	{
		label: "Manifesto",
		title: "You can’t use up creativity.",
		body: "The more you lean into it, the more intuition and clarity you unlock.",
		metrics: [
			{ label: "Years of experience", value: "14" },
			{ label: "Satisfied teams", value: "187" }
		],
		accent: "#0b3d4d"
	}
];

const serviceBlocks = [
	{ title: "Product Designer.", subtitle: "124 Projects", color: "#f6b348" },
	{ title: "Branding Designer.", subtitle: "37 Projects", color: "#1f3140" },
	{ title: "Full Stack Developer.", subtitle: "62 Projects", color: "#28384a" }
];

export default function AboutPage() {
	return (
		<Box sx={{ bgcolor: "#f3f7f6", color: "#06131f", minHeight: "100vh" }}>
			<NavBar />

			<Box component="section" sx={{ background: "linear-gradient(180deg,#0b3d4d,#0a2c3d)", color: "#f4fbfa", py: { xs: 6, md: 8 } }}>
				<Container>
					<Box
						sx={{
							display: "grid",
							gap: { xs: 4, md: 6 },
							gridTemplateColumns: { xs: "1fr", md: "1fr 0.9fr" },
							alignItems: "center"
						}}
					>
						<Box>
							<Stack spacing={2}>
								<Typography variant="overline" sx={{ letterSpacing: ".2em", color: "rgba(244,251,250,0.7)" }}>
									Introduction
								</Typography>
								<Typography variant="h2" fontWeight={700}>
									Ashish Paudel.
								</Typography>
								<Typography variant="h5" fontWeight={500} color="rgba(244,251,250,0.85)">
									Product designer & engineer, based in Kathmandu.
								</Typography>
								<Typography color="rgba(244,251,250,0.75)">
									I translate dense computer science stories into simple experiences—pairing systems thinking with editorial visuals for founders,
									research labs, and global teams.
								</Typography>
								<Stack direction="row" spacing={2} alignItems="center" pt={2}>
									<Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
										View work
									</Button>
									<Button variant="outlined" color="inherit" endIcon={<MailOutlineIcon />} component={Link} href="mailto:hello@oldschoolcs.com">
										Contact me
									</Button>
								</Stack>
								<Stack direction="row" spacing={2} pt={1}>
									<InstagramIcon fontSize="large" />
									<LinkedInIcon fontSize="large" />
								</Stack>
							</Stack>
						</Box>
						<Box>
							<Box
								sx={{
									borderRadius: 4,
									overflow: "hidden",
									boxShadow: "0 40px 80px rgba(5, 14, 24, 0.8)",
									border: "1px solid rgba(255,255,255,0.05)",
									position: "relative",
									minHeight: { xs: 320, md: 460 }
								}}
							>
								<Image src="/profile_photo_ashish.jpg" alt="Ashish Paudel" fill style={{ objectFit: "cover" }} />
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>

			<Box sx={{ bgcolor: "#fdfcf7", py: { xs: 6, md: 8 } }}>
				<Container>
					<Box
						sx={{
							display: "grid",
							gap: 3,
							gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" }
						}}
					>
						{contactHighlights.map((item) => (
							<Box key={item.title}>
								<Card
									sx={{
										height: "100%",
										boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
										borderRadius: 3,
										position: "relative",
										overflow: "hidden"
									}}
								>
									<Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${item.accent}, transparent)` }} />
									<CardContent sx={{ position: "relative", bgcolor: "rgba(255,255,255,0.94)" }}>
										<Typography variant="overline" sx={{ color: "rgba(6,19,31,0.5)" }}>
											{item.label}
										</Typography>
										<Typography variant="h6" fontWeight={700} sx={{ mt: 1 }}>
											{item.title}
										</Typography>
										<Typography color="rgba(6,19,31,0.7)" sx={{ mt: 1.5 }}>
											{item.body}
										</Typography>
										{item.link && (
											<Button
												component={Link}
												href={item.link}
												variant="text"
												endIcon={<ArrowForwardIcon />}
												sx={{ mt: 2, textTransform: "none", color: item.accent }}
											>
												{item.linkLabel}
											</Button>
										)}
										{item.metrics && (
											<Stack direction="row" spacing={4} sx={{ mt: 3 }}>
												{item.metrics.map((metric) => (
													<Box key={metric.label}>
														<Typography variant="h4" fontWeight={700}>
															{metric.value}
														</Typography>
														<Typography color="rgba(6,19,31,0.6)">{metric.label}</Typography>
													</Box>
												))}
											</Stack>
										)}
									</CardContent>
								</Card>
							</Box>
						))}
					</Box>
				</Container>
			</Box>

			<Box sx={{ bgcolor: "#0c1f31", py: { xs: 6, md: 8 } }}>
				<Container>
					<Box
						sx={{
							display: "grid",
							gap: 2,
							gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" }
						}}
					>
						{serviceBlocks.map((block) => (
							<Box key={block.title}>
								<Card
									sx={{
										bgcolor: block.color,
										color: block.color === "#f6b348" ? "#0b1f2e" : "#f4fbfa",
										minHeight: 160,
										display: "flex",
										border: "1px solid rgba(255,255,255,0.1)"
									}}
								>
									<CardContent>
										<Typography variant="h6" fontWeight={600}>
											{block.title}
										</Typography>
										<Typography sx={{ mt: 2 }}>{block.subtitle}</Typography>
									</CardContent>
								</Card>
							</Box>
						))}
					</Box>
				</Container>
			</Box>
		</Box>
	);
}


