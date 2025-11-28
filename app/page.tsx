"use client";

import { Box, Button, Chip, Container, InputAdornment, MenuItem, Pagination, Stack, TextField, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { NavBar } from "@/components/webinars/NavBar";
import { WebinarCard } from "@/components/webinars/WebinarCard";
import { CtaPanel } from "@/components/webinars/CtaPanel";
import { SiteFooter } from "@/components/webinars/SiteFooter";
import { UpcomingCarousel } from "@/components/webinars/UpcomingCarousel";

const upcomingWebinars = [
	{
		id: 1,
		tag: "Graph Theory\nPlaygrounds",
		title: "Visualizing Network Flows with Residual Graphs",
		description: "Step through max-flow and min-cut algorithms using layered diagrams, animations, and real datasets.",
		date: "Mar 23, 2024",
		time: "09:00 AM PST",
		speaker: {
			name: "Nadia Mensah",
			role: "Distributed Systems Researcher",
			avatar: "/img2.jpg"
		},
		background: "linear-gradient(135deg,#edeff0,#dbecea)",
		categoryTag: "#Algorithms",
		coverImage: "/img2.jpg"
	},
	{
		id: 2,
		tag: "Machine\nLearning Ops",
		title: "Debugging Transformers Without Losing Your Mind",
		description: "Use attention probes, gradient surgery, and evaluation harnesses to make sense of gigantic language models.",
		date: "Mar 25, 2024",
		time: "11:30 AM PST",
		speaker: {
			name: "Karissa Brown",
			role: "ML Platform Lead",
			avatar: "/img3.webp"
		},
		background: "linear-gradient(135deg,#f6f2ff,#ebe6ff)",
		categoryTag: "#ML",
		coverImage: "/img3.webp"
	},
	{
		id: 3,
		tag: "AI Tooling",
		title: "Prompt Engineering for Systems Engineers",
		description: "Harness LLM copilots to reason about capacity planning, network diagrams, and incident retros.",
		date: "Mar 27, 2024",
		time: "02:00 PM PST",
		speaker: {
			name: "Lena Ortiz",
			role: "AI Infrastructure Engineer",
			avatar: "/img4.jpg"
		},
		background: "linear-gradient(135deg,#fef2f2,#fde5e5)",
		categoryTag: "#AI",
		coverImage: "/img4.jpg"
	},
	{
		id: 4,
		tag: "Collaborative\nSystems",
		title: "Bridging Software Architecture & Hardware Constraints",
		description: "Learn the mental models that help teams design silicon-aware software for robotics and embedded systems.",
		date: "Mar 29, 2024",
		time: "10:00 AM PST",
		speaker: {
			name: "Deni Wilkinson",
			role: "Hardware Systems Architect",
			avatar: "/img1.jpg"
		},
		background: "linear-gradient(135deg,#f0f5ff,#d7e6ff)",
		categoryTag: "#Systems",
		coverImage: "/img1.jpg"
	}
];

const pastWebinars = [
	{
		id: 1,
		tag: "Compilers",
		title: "Building a Register Allocator from Scratch",
		date: "Mar 4, 2024",
		description: "Follow live-coding notebooks that translate SSA graphs into efficient register assignments.",
		speaker: "Alex Jordan",
		avatar: "/img1.jpg",
		accent: "#e8f8f2"
	},
	{
		id: 2,
		tag: "Security",
		title: "Memory Safety Patterns for C Systems",
		date: "Mar 8, 2024",
		description: "Learn hardened allocator tricks, shadow stacks, and fuzzing strategies for legacy codebases.",
		speaker: "Mina Xu",
		avatar: "/img4.jpg",
		accent: "#fef1e0"
	},
	{
		id: 3,
		tag: "AI Infra",
		title: "Serving LLMs on Tiny GPUs",
		date: "Mar 12, 2024",
		description: "Quantization math, KV cache tricks, and routing layers to keep inference under budget.",
		speaker: "Carmen Luo",
		avatar: "/img2.jpg",
		accent: "#e4f1ff"
	},
	{
		id: 4,
		tag: "Distributed Systems",
		title: "Byzantine Fault Tolerance for Practitioners",
		date: "Mar 15, 2024",
		description: "Step-by-step derivations of PBFT along with visual timelines, failure stories, and code labs.",
		speaker: "Noah Patel",
		avatar: "/img3.webp",
		accent: "#fdf4ff"
	},
	{
		id: 5,
		tag: "Data Systems",
		title: "Columnar Storage Engines Explained",
		date: "Mar 18, 2024",
		description: "Understand vectorized execution with interactive whiteboard sessions and perf traces.",
		speaker: "Georgia Lee",
		avatar: "/img4.jpg",
		accent: "#fef6e5"
	},
	{
		id: 6,
		tag: "Robotics",
		title: "Control Theory Crash Course",
		date: "Mar 22, 2024",
		description: "Simulate PID loops, state-space models, and MPC pipelines using our sandboxed lab environment.",
		speaker: "Marcus Silva",
		avatar: "/img1.jpg",
		accent: "#eaf0ff"
	}
];

export default function HomePage() {
	return (
		<>
			<NavBar />

			<Box
				component="section"
				sx={{
					background: "linear-gradient(180deg,#0b3d4d,#0a2c3d)",
					color: "#f4fbfa",
					pt: { xs: 6, md: 8 },
					pb: { xs: 7, md: 10 },
					borderBottomLeftRadius: { md: 1 },
					borderBottomRightRadius: { md: 1 },
					position: "relative",
					overflow: "visible"
				}}
			>
				<Box
					sx={{
						position: "absolute",
						inset: 0,
						backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
						backgroundSize: "120px 120px",
						opacity: 0.2,
						pointerEvents: "none",
						borderBottomLeftRadius: { md: 1 },
						borderBottomRightRadius: { md: 1 }
					}}
				/>
				<Container sx={{ position: "relative" }}>
					<Stack spacing={2} textAlign="center" maxWidth={720} mx="auto">
						<Typography variant="overline" sx={{ letterSpacing: ".3em", color: "rgba(244,251,250,0.6)" }}>
							Old School CS
						</Typography>
						<Typography variant="h3" fontWeight={700}>
							Computer Science & Engineering, explained clearly
						</Typography>
						<Typography color="rgba(244,251,250,0.8)">
							Deep-dive essays, diagrams, and walkthroughs that turn notoriously difficult CS and engineering topics into friendly,
							easy-to-digest lessons. Learn at your own pace, build intuition, and ship better systems.
						</Typography>
						<Box sx={{ pt: 2 }}>
							<Button
								variant="contained"
								color="secondary"
								size="large"
								endIcon={<SouthIcon sx={{ width: 18, height: 18 }} />}
								sx={{ color: "#05262c", fontWeight: 600 }}
								onClick={() => document.getElementById("featured-section")?.scrollIntoView({ behavior: "smooth" })}
							>
								Explore
							</Button>
						</Box>
					</Stack>

					<Box id="featured-section">
						<UpcomingCarousel title="Featured" items={upcomingWebinars} />
					</Box>
				</Container>
			</Box>

			<Container sx={{ py: { xs: 6, md: 8 } }}>
				<Stack spacing={1}>
					<Typography variant="h4" fontWeight={700}>
						Browse recent lessons
					</Typography>
					<Typography color="text.secondary">
						Replay workshops, code walkthroughs, and visual explainers covering everything from compilers to robotics.
					</Typography>
				</Stack>

				<Box
					sx={{
						mt: 3,
						display: "grid",
						gap: 2,
						alignItems: "center",
						gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr 0.8fr" }
					}}
				>
					<TextField
						fullWidth
						size="small"
						placeholder="Search topics, authors, or keywords"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchRoundedIcon fontSize="small" />
								</InputAdornment>
							)
						}}
					/>
					<TextField select fullWidth size="small" defaultValue="recent" label="Sort by">
						<MenuItem value="recent">Most recent</MenuItem>
						<MenuItem value="popular">Most loved</MenuItem>
						<MenuItem value="length">Shortest read</MenuItem>
					</TextField>
					<TextField select fullWidth size="small" defaultValue="all" label="All topics">
						<MenuItem value="all">All topics</MenuItem>
						<MenuItem value="systems">Distributed systems</MenuItem>
						<MenuItem value="ml">Machine learning</MenuItem>
						<MenuItem value="hardware">Hardware</MenuItem>
					</TextField>
				</Box>

				<Stack direction="row" spacing={1.5} mt={3} flexWrap="wrap">
					<Chip label="All" color="primary" sx={{ color: "#fff" }} />
					<Chip label="Distributed Systems" variant="outlined" />
					<Chip label="Compilers" variant="outlined" />
					<Chip label="Robotics" variant="outlined" />
					<Chip label="AI Infra" variant="outlined" />
				</Stack>

				<Box
					sx={{
						mt: 1,
						display: "grid",
						gap: 3,
						gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }
					}}
				>
					{pastWebinars.map((webinar) => (
						<Box key={webinar.id}>
							<WebinarCard {...webinar} />
						</Box>
					))}
				</Box>

				<Stack alignItems="center" mt={4}>
					<Pagination count={3} color="primary" />
				</Stack>

				<CtaPanel />
			</Container>

			<SiteFooter />
		</>
	);
}

