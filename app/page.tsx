"use client";
import Link from "next/link";
import Image from "next/image";
import {
	Box,
	Breadcrumbs,
	Button,
	Chip,
	Container,
	Divider,
	Grid,
	Link as MuiLink,
	Stack,
	Typography,
	Card,
	CardActionArea,
	CardContent
} from "@mui/material";

export default function HomePage() {
	const posts = [
		{ id: 1, title: "Interview with Photographer & UX Designer, Viola LeBlanc", img: "/img2.jpg" },
		{ id: 2, title: "Improve Your Design Skills: Develop an \"Eye\" for Design", img: "/img3.webp" },
		{ id: 3, title: "A Relentless Pursuit of Perfection in Product Design", img: "/img4.jpg" },
		{ id: 4, title: "A Continually Unfolding History — Made by Hand", img: "/img1.jpg" },
		{ id: 5, title: "How Remote Collaboration Makes Us Better Designers", img: "/img2.jpg" },
		{ id: 6, title: "Best Books on Scaling Your Early-Stage Startup", img: "/img3.webp" },
		{ id: 7, title: "How to Run a Successful Business With Your Partner", img: "/img4.jpg" },
		{ id: 8, title: "Why Food Matters — Disease Prevention & Treatment", img: "/img1.jpg" },
		{ id: 9, title: "Conversations with London Makr & Co.", img: "/img2.jpg" }
	];

	return (
		<Container sx={{ py: { xs: 3, md: 6 } }}>
			{/* Breadcrumbs */}
			<Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ fontSize: 13, mb: 1 }}>
				<MuiLink href="#" underline="hover" color="text.secondary">
					Resources
				</MuiLink>
				<MuiLink href="#" underline="hover" color="primary">
					Design & Photography
				</MuiLink>
			</Breadcrumbs>

			{/* Title + Description */}
			<Typography variant="h3" component="h1" sx={{ fontWeight: 800, letterSpacing: "-.01em" }}>
				Untitled Design & Photography Journal
			</Typography>
			<Typography sx={{ mt: 1.5 }} color="text.secondary">
				The Untitled UI Journal features carefully selected good works from studios, designers, architects, photographers,
				and creators from all around the globe. Subscribe for new posts in your inbox.
			</Typography>

			{/* Hero */}
			<Box sx={{ mt: 3, borderRadius: 2, overflow: "hidden", border: 1, borderColor: "divider", position: "relative" }}>
				<Image src="/img1.jpg" alt="" width={1600} height={900} style={{ width: "100%", height: "auto", display: "block" }} />
				{/* overlay gradient */}
				<Box
					sx={{
						position: "absolute",
						inset: 0,
						background: "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.25), rgba(0,0,0,0))"
					}}
				/>
				{/* caption */}
				<Box sx={{ position: "absolute", left: 16, right: 16, bottom: 16, color: "#fff" }}>
					<Typography variant="h5" sx={{ fontWeight: 700, textShadow: "0 1px 3px rgba(0,0,0,.4)" }}>
						Sophia Mesabhi from Untitled Ventures on Sustainable and Profitable Growth & What We Can Learn From the
						Gumroad Mess
					</Typography>
					<Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 1.5, opacity: 0.95, fontSize: 12 }}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<Box
								sx={{
									width: 24,
									height: 24,
									borderRadius: "50%",
									bgcolor: "rgba(255,255,255,.15)",
									border: "1px solid rgba(255,255,255,.25)"
								}}
							/>
							<span>Frankie Sullivan</span>
						</Stack>
						<Box sx={{ width: 4, height: 4, bgcolor: "rgba(255,255,255,.7)", borderRadius: "50%" }} />
						<span>10 April 2025</span>
						<Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
							<Chip label="Design" size="small" variant="outlined" sx={chipOverlay} />
							<Chip label="Retail" size="small" variant="outlined" sx={chipOverlay} />
							<Chip label="Interviews" size="small" variant="outlined" sx={chipOverlay} />
							<Chip label="12 min read" size="small" variant="outlined" sx={chipOverlay} />
						</Stack>
					</Stack>
				</Box>
			</Box>

			{/* Featured blog posts header */}
			<Stack direction="row" alignItems="center" sx={{ mt: 5, mb: 2 }}>
				<Typography variant="h6" sx={{ fontWeight: 700 }}>
					Featured blog posts
				</Typography>
				<Box sx={{ ml: "auto" }}>
					<Link href="/blog" passHref legacyBehavior>
						<Button size="small" variant="outlined">View all posts</Button>
					</Link>
				</Box>
			</Stack>

			{/* Grid of posts */}
			<Grid container spacing={2}>
				{posts.map((p) => (
					<Grid key={p.id} item xs={12} md={6} lg={4}>
						<Card variant="outlined" sx={{ height: "100%" }}>
							<CardActionArea component={Link} href="/blog/hello-world" sx={{ alignItems: "stretch" }}>
								<Box sx={{ aspectRatio: "4 / 3", width: "100%", position: "relative" }}>
									<Image src={p.img} alt="" fill style={{ objectFit: "cover" }} />
								</Box>
								<CardContent>
									<Typography fontWeight={600} sx={{ mb: .5 }}>{p.title}</Typography>
									<Typography variant="body2" color="text.secondary">
										Sample excerpt. Replace with your MDX summaries.
									</Typography>
									<Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
										<Typography variant="caption" color="text.secondary">By Demo Author</Typography>
										<Divider flexItem orientation="vertical" />
										<Typography variant="caption" color="text.secondary">Jan 9, 2025</Typography>
									</Stack>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>

			<Stack alignItems="center" sx={{ my: 3 }}>
				<Button variant="outlined">Loading more…</Button>
			</Stack>

			{/* CTA section */}
			<Box sx={{ border: 1, borderColor: "divider", borderRadius: 2, p: { xs: 3, md: 4 }, bgcolor: "grey.50" }}>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12} md={8}>
						<Typography variant="h6" sx={{ fontWeight: 700 }}>Let’s get started on something great</Typography>
						<Typography color="text.secondary">Join over 4,000+ startups already growing with Untitled.</Typography>
					</Grid>
					<Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
						<Button sx={{ mr: 1 }} variant="outlined">Learn more</Button>
						<Link href="/blog" passHref legacyBehavior>
							<Button variant="contained">Get started</Button>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}

const chipOverlay = {
	color: "#fff",
	borderColor: "rgba(255,255,255,.35)",
	bgcolor: "rgba(255,255,255,.12)",
	"& .MuiChip-label": { px: 1 },
	"&:hover": { borderColor: "rgba(255,255,255,.6)", bgcolor: "rgba(255,255,255,.18)" }
} as const;


