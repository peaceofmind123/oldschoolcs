"use client";

import {
	Box,
	Chip,
	Container,
	Grid,
	IconButton,
	InputAdornment,
	MenuItem,
	Pagination,
	Stack,
	TextField,
	Typography
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { NavBar } from "@/components/webinars/NavBar";
import { UpcomingCard } from "@/components/webinars/UpcomingCard";
import { WebinarCard } from "@/components/webinars/WebinarCard";
import { CtaPanel } from "@/components/webinars/CtaPanel";
import { SiteFooter } from "@/components/webinars/SiteFooter";

const upcomingWebinars = [
	{
		id: 1,
		tag: "Cost-Efficient QA",
		title: "Reducing QA Costs with Automation",
		description: "Learn how smart automation can simplify quality assurance cycles without compromising software releases.",
		date: "Mar 23, 2024",
		time: "09:00 AM PST",
		speaker: {
			name: "Adedayo Bernard",
			role: "Principal QA Lead",
			avatar: "/img2.jpg"
		},
		accentColor: "#d9f8f0",
		background: "linear-gradient(135deg,#f9fffd,#e1f4f0)"
	},
	{
		id: 2,
		tag: "Machine Learning QA",
		title: "The Future of QA with Machine Learning",
		description: "Explore how machine learning creates always-on testing loops with proactive alerts, saving time and releases.",
		date: "Mar 25, 2024",
		time: "11:30 AM PST",
		speaker: {
			name: "Karissa Brown",
			role: "Head of Automation",
			avatar: "/img3.webp"
		},
		accentColor: "#efe7ff",
		background: "linear-gradient(135deg,#fbf8ff,#ece8ff)"
	}
];

const pastWebinars = [
	{
		id: 1,
		tag: "Open Source QA",
		title: "Exploring Open Source SoftQA Tools",
		date: "Mar 4, 2024",
		description: "Dive into modular QA stacks for modern teams and how they scale with small, remote squads.",
		speaker: "Alex Jordan",
		avatar: "/img1.jpg",
		accent: "#e8f8f2"
	},
	{
		id: 2,
		tag: "100% Coverage",
		title: "Achieving 100% Test Coverage",
		date: "Mar 8, 2024",
		description: "Pragmatic test coverage stories from enterprise QA leaders operating in regulated industries.",
		speaker: "Mina Xu",
		avatar: "/img4.jpg",
		accent: "#fef1e0"
	},
	{
		id: 3,
		tag: "Secure Your Code",
		title: "Enhancing Security in Automated Testing",
		date: "Mar 12, 2024",
		description: "Meet the secure testing playbook covering threat modeling for QA automation studios.",
		speaker: "Carmen Luo",
		avatar: "/img2.jpg",
		accent: "#e4f1ff"
	},
	{
		id: 4,
		tag: "Continuous QA",
		title: "Continuous Testing for DevOps Success",
		date: "Mar 15, 2024",
		description: "DevOps isn't continuous testing; it's de-risking releases. Discover metrics and reference stacks.",
		speaker: "Noah Patel",
		avatar: "/img3.webp",
		accent: "#fdf4ff"
	},
	{
		id: 5,
		tag: "Zero Defects!",
		title: "Achieving Zero Defects with QA Automation",
		date: "Mar 18, 2024",
		description: "Intelligent QA automation practices that help release faster and deliver software with fewer bugs.",
		speaker: "Georgia Lee",
		avatar: "/img4.jpg",
		accent: "#fef6e5"
	},
	{
		id: 6,
		tag: "Scale QA Effortlessly",
		title: "Building Scalable Testing Strategies",
		date: "Mar 22, 2024",
		description: "Learn where to begin when building a QA organization that scales with your product teams.",
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
							Our webinar
						</Typography>
						<Typography variant="h3" fontWeight={700}>
							Grow as a Developer with our Training Webinars
						</Typography>
						<Typography color="rgba(244,251,250,0.8)">
							Free live training workshops, Monday to Friday, from the comfort of your own home. Let’s learn, grow, and build
							together.
						</Typography>
					</Stack>

					<Stack direction="row" alignItems="center" justifyContent="space-between" mt={6} mb={3}>
						<Typography variant="h6" fontWeight={600}>
							Upcoming
						</Typography>
						<Stack direction="row" spacing={1}>
							<IconButton size="small" sx={{ border: "1px solid rgba(244,251,250,0.3)", color: "inherit" }}>
								<ArrowBackRoundedIcon fontSize="small" />
							</IconButton>
							<IconButton size="small" sx={{ border: "1px solid rgba(244,251,250,0.3)", color: "inherit" }}>
								<ArrowForwardRoundedIcon fontSize="small" />
							</IconButton>
						</Stack>
					</Stack>

					<Grid container spacing={3}>
						{upcomingWebinars.map((webinar) => (
							<Grid key={webinar.id} item xs={12} md={6}>
								<UpcomingCard {...webinar} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Container sx={{ py: { xs: 6, md: 8 } }}>
				<Stack spacing={1}>
					<Typography variant="h4" fontWeight={700}>
						Watch past webinars
					</Typography>
					<Typography color="text.secondary">
						Instantly stream our best sessions and learn how modern QA teams collaborate, integrate AI and scale quality.
					</Typography>
				</Stack>

				<Grid container spacing={2} mt={3} alignItems="center">
					<Grid item xs={12} md={5}>
						<TextField
							fullWidth
							size="small"
							placeholder="Search webinars"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchRoundedIcon fontSize="small" />
									</InputAdornment>
								)
							}}
						/>
					</Grid>
					<Grid item xs={6} md={3}>
						<TextField select fullWidth size="small" defaultValue="recent" label="Sort by">
							<MenuItem value="recent">Most recent</MenuItem>
							<MenuItem value="popular">Most popular</MenuItem>
							<MenuItem value="length">Shortest duration</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={6} md={4}>
						<TextField select fullWidth size="small" defaultValue="all" label="All categories">
							<MenuItem value="all">All categories</MenuItem>
							<MenuItem value="ai">AI testing</MenuItem>
							<MenuItem value="automation">Automation</MenuItem>
							<MenuItem value="security">Security</MenuItem>
						</TextField>
					</Grid>
				</Grid>

				<Stack direction="row" spacing={1.5} mt={3} flexWrap="wrap">
					<Chip label="All" color="primary" sx={{ color: "#fff" }} />
					<Chip label="AI Test Scripts" variant="outlined" />
					<Chip label="Collaboration" variant="outlined" />
					<Chip label="QA Solutions" variant="outlined" />
					<Chip label="DevOps" variant="outlined" />
				</Stack>

				<Grid container spacing={3} mt={1}>
					{pastWebinars.map((webinar) => (
						<Grid key={webinar.id} item xs={12} md={6} lg={4}>
							<WebinarCard {...webinar} />
						</Grid>
					))}
				</Grid>

				<Stack alignItems="center" mt={4}>
					<Pagination count={3} color="primary" />
				</Stack>

				<CtaPanel />
			</Container>

			<SiteFooter />
		</>
	);
}

