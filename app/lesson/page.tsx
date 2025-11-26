"use client";

import Image from "next/image";
import Link from "next/link";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Container,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Tab,
	Tabs,
	Typography
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShareIcon from "@mui/icons-material/Share";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import React from "react";

const sidebarLinks = [
	{ label: "Dashboard", icon: DashboardIcon },
	{ label: "eBook", icon: MenuBookIcon },
	{ label: "Courses", icon: SchoolIcon, active: true },
	{ label: "Code Challenges", icon: CodeIcon },
	{ label: "Community", icon: PeopleAltIcon }
];

const courseSections = [
	{
		title: "01: Primer",
		total: "22 min",
		lessons: [
			{ title: "Introduction", time: "2 min" },
			{ title: "Why graphs?", time: "5 min" },
			{ title: "Residual networks", time: "12 min" },
			{ title: "Algorithm tour", time: "3 min" }
		]
	},
	{
		title: "02: Intermediate Level Stuff",
		total: "1h 20min",
		lessons: [
			{ title: "Bipartite matching", time: "18 min" },
			{ title: "Scaling heuristics", time: "26 min" },
			{ title: "Visualization workshop", time: "36 min" }
		]
	},
	{
		title: "03: Advanced Flows",
		total: "36 min",
		lessons: [
			{ title: "Push-relabel deep dive", time: "20 min" },
			{ title: "Dinic optimizations", time: "16 min" }
		]
	},
	{
		title: "04: Imports & Graphics",
		total: "40 min",
		lessons: [
			{ title: "Parsing real networks", time: "15 min" },
			{ title: "Rendering custom widgets", time: "25 min" }
		]
	},
	{
		title: "05: Systems in Practice",
		total: "1h 12min",
		lessons: [
			{ title: "Operations research case study", time: "32 min" },
			{ title: "Data streaming infra", time: "40 min" }
		]
	},
	{
		title: "06: Summary",
		total: "8 min",
		lessons: [
			{ title: "Where to go next", time: "5 min" },
			{ title: "Project brief", time: "3 min" }
		]
	}
];

const overviewBullets = [
	"Build intuition for network flow, cuts, and matching problems.",
	"Translate math into interactive diagrams powered by D3 and WebGL.",
	"Deploy flow services that scale to millions of requests.",
	"Pair theory notes with notebooks, quizzes, and coding katas."
];

export default function LessonPage() {
	const [tab, setTab] = React.useState(0);

	return (
		<Box sx={{ minHeight: "100vh", bgcolor: "#f3f2fd", py: { xs: 4, md: 6 } }}>
			<Container maxWidth="xl">
				<Card
					sx={{
						p: { xs: 2, md: 3 },
						borderRadius: 3,
						boxShadow: "0 30px 50px rgba(12,36,51,0.08)",
						bgcolor: "#ffffff"
					}}
				>
					<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
						<Button component={Link} href="/" startIcon={<ArrowBackIosNewIcon fontSize="small" />}>
							Back to library
						</Button>
						<Stack direction="row" spacing={1.5}>
							<Button variant="outlined" color="inherit" startIcon={<ShareIcon fontSize="small" />}>
								Share
							</Button>
							<Button variant="contained" color="primary">
								Enroll now
							</Button>
							<IconButton>
								<NotificationsNoneIcon />
							</IconButton>
						</Stack>
					</Stack>

					<Box
						sx={{
							display: "grid",
							gap: { xs: 3, lg: 4 },
							gridTemplateColumns: { xs: "1fr", lg: "220px 1fr 320px" }
						}}
					>
						{/* Sidebar */}
						<Card variant="outlined" sx={{ p: 2, bgcolor: "#fafbff" }}>
							<Stack direction="row" alignItems="center" spacing={1.5}>
								<Box
									sx={{
										width: 32,
										height: 32,
										borderRadius: 2,
										bgcolor: "primary.main",
										color: "primary.contrastText",
										display: "grid",
										placeItems: "center",
										fontWeight: 700
									}}
								>
									OS
								</Box>
								<Typography fontWeight={700}>Old School CS</Typography>
							</Stack>
							<Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: 3, mb: 2 }}>
								<Avatar src="/img4.jpg" alt="Scott" />
								<Box>
									<Typography fontWeight={600}>Scott M.</Typography>
									<Typography variant="caption" color="text.secondary">
										Member since 2020
									</Typography>
								</Box>
							</Stack>
							<List dense>
								{sidebarLinks.map((item) => (
									<ListItem key={item.label} disablePadding>
										<ListItemButton selected={item.active}>
											<ListItemIcon sx={{ minWidth: 32 }}>
												<item.icon fontSize="small" />
											</ListItemIcon>
											<ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: item.active ? 600 : 500 }} primary={item.label} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
							<Divider sx={{ my: 2 }} />
							<List dense>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon sx={{ minWidth: 32 }}>
											<SettingsIcon fontSize="small" />
										</ListItemIcon>
										<ListItemText primaryTypographyProps={{ fontSize: 14 }} primary="Settings" />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon sx={{ minWidth: 32 }}>
											<SupportAgentIcon fontSize="small" />
										</ListItemIcon>
										<ListItemText primaryTypographyProps={{ fontSize: 14 }} primary="Support" />
									</ListItemButton>
								</ListItem>
							</List>
						</Card>

						{/* Main content */}
						<Box>
							<Card variant="outlined" sx={{ overflow: "hidden" }}>
								<Box sx={{ position: "relative", aspectRatio: "16 / 9", bgcolor: "#d9dce8" }}>
									<Image src="/img1.jpg" alt="" fill style={{ objectFit: "cover" }} />
									<Box
										sx={{
											position: "absolute",
											inset: 0,
											bgcolor: "rgba(0,0,0,0.25)"
										}}
									/>
									<IconButton
										sx={{
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -50%)",
											width: 72,
											height: 72,
											bgcolor: "rgba(255,255,255,0.9)",
											"&:hover": { bgcolor: "rgba(255,255,255,1)" }
										}}
									>
										<PlayArrowRoundedIcon fontSize="large" color="primary" />
									</IconButton>
								</Box>
								<CardContent>
									<Typography variant="overline" color="text.secondary">
										Courses · Algorithms
									</Typography>
									<Typography variant="h5" fontWeight={700}>
										Max-Flow Systems from A to Z
									</Typography>
									<Stack direction="row" spacing={3} mt={1} color="text.secondary">
										<Typography variant="body2">38 lessons</Typography>
										<Typography variant="body2">4h 30min</Typography>
										<Typography variant="body2">4.9 ⭐ (212 reviews)</Typography>
									</Stack>
								</CardContent>
							</Card>

							<Card variant="outlined" sx={{ mt: 3, p: 2 }}>
								<Tabs
									value={tab}
									onChange={(_e, value) => setTab(value)}
									variant="scrollable"
									scrollButtons="auto"
									sx={{ borderBottom: 1, borderColor: "divider" }}
								>
									<Tab label="Overview" />
									<Tab label="Author" />
									<Tab label="FAQ" />
									<Tab label="Announcements" />
									<Tab label="Reviews" />
								</Tabs>

								<Box hidden={tab !== 0} sx={{ mt: 3 }}>
									<Typography variant="h6" fontWeight={700}>
										About this lesson
									</Typography>
									<Typography color="text.secondary" sx={{ mt: 1.5 }}>
										Unlock the intuition behind network flows and matching problems. Whether you are prepping for interviews, building
										logistics software, or teaching your team, this series walks through theory, visual intuition, and production-grade
										implementations.
									</Typography>
									<Typography variant="h6" fontWeight={700} sx={{ mt: 3 }}>
										What you&apos;ll learn
									</Typography>
									<Stack spacing={1.5} mt={1.5}>
										{overviewBullets.map((item) => (
											<Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
												<Chip size="small" label="✓" color="primary" sx={{ color: "#fff", minWidth: 28 }} />
												<Typography color="text.secondary">{item}</Typography>
											</Stack>
										))}
									</Stack>
								</Box>

								<Box hidden={tab !== 1} sx={{ mt: 3 }}>
									<Stack direction="row" spacing={2} alignItems="center">
										<Avatar src="/img3.webp" sx={{ width: 56, height: 56 }} />
										<Box>
											<Typography fontWeight={700}>Crystal Lucas</Typography>
											<Typography variant="body2" color="text.secondary">
												Systems Engineer & Teaching Fellow
											</Typography>
										</Box>
									</Stack>
									<Typography color="text.secondary" sx={{ mt: 2 }}>
										Crystal designs distributed systems for robotics labs and mentors engineers on translating math into delightful
										interfaces. She has shipped curriculum for Stanford, Recurse Center, and multiple startups.
									</Typography>
								</Box>

								<Box hidden={tab !== 2} sx={{ mt: 3 }}>
									<Typography variant="body2" color="text.secondary">
										Frequently asked questions coming soon.
									</Typography>
								</Box>
								<Box hidden={tab !== 3} sx={{ mt: 3 }}>
									<Typography variant="body2" color="text.secondary">
										Stay tuned for course announcements and cohort schedules.
									</Typography>
								</Box>
								<Box hidden={tab !== 4} sx={{ mt: 3 }}>
									<Typography variant="body2" color="text.secondary">
										Reviews for this lesson will appear here after the next cohort.
									</Typography>
								</Box>
							</Card>
						</Box>

						{/* Right rail */}
						<Stack spacing={3}>
							<Card variant="outlined">
								<CardContent>
									<Typography variant="h6" fontWeight={700}>
										Course content
									</Typography>
									<Typography variant="body2" color="text.secondary">
										6 sections • 4h 30m total runtime
									</Typography>
								</CardContent>
								<Divider />
								{courseSections.map((section, index) => (
									<Accordion key={section.title} defaultExpanded={index === 0} disableGutters>
										<AccordionSummary expandIcon={<ExpandMoreIcon />}>
											<Box>
												<Typography fontWeight={600}>{section.title}</Typography>
												<Typography variant="caption" color="text.secondary">
													{section.total}
												</Typography>
											</Box>
										</AccordionSummary>
										<AccordionDetails>
											<Stack spacing={1}>
												{section.lessons.map((lesson) => (
													<Stack key={lesson.title} direction="row" justifyContent="space-between" color="text.secondary" fontSize={14}>
														<span>{lesson.title}</span>
														<span>{lesson.time}</span>
													</Stack>
												))}
											</Stack>
										</AccordionDetails>
									</Accordion>
								))}
							</Card>

							<Card variant="outlined">
								<CardContent>
									<Typography variant="subtitle1" fontWeight={700}>
										Author
									</Typography>
									<Stack direction="row" spacing={2} alignItems="center" mt={2}>
										<Avatar src="/img2.jpg" sx={{ width: 48, height: 48 }} />
										<Box>
											<Typography fontWeight={600}>Crystal Lucas</Typography>
											<Stack direction="row" spacing={1} alignItems="center" color="text.secondary" fontSize={13}>
												<span>4.8 ⭐</span>
												<span>•</span>
												<span>Systems Specialist</span>
											</Stack>
										</Box>
									</Stack>
									<Typography color="text.secondary" sx={{ mt: 2 }}>
										Crystal is a seasoned systems designer with over a decade of experience guiding engineers through complex design tools.
									</Typography>
								</CardContent>
							</Card>
						</Stack>
					</Box>
				</Card>
			</Container>
		</Box>
	);
}


