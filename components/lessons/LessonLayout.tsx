"use client";

import React from "react";
import Link from "next/link";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Box,
	Card,
	CardContent,
	Chip,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Tab,
	Tabs,
	Typography,
	Button
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Lesson } from "@/lib/lessons";

const sidebarIconMap: Record<string, React.ElementType> = {
	Dashboard: DashboardIcon,
	eBook: MenuBookIcon,
	Courses: SchoolIcon,
	"Code Challenges": CodeIcon,
	Community: PeopleAltIcon
};

export function LessonLayout({ lesson }: { lesson: Lesson }) {
	const [tab, setTab] = React.useState(0);

	return (
		<Box
			sx={{
				display: "grid",
				gap: { xs: 3, lg: 4 },
				gridTemplateColumns: { xs: "1fr", lg: "220px 1fr 320px" }
			}}
		>
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
					{lesson.sidebarLinks.map((label) => {
						const Icon = sidebarIconMap[label] ?? DashboardIcon;
						return (
							<ListItem key={label} disablePadding>
								<ListItemButton selected={label === "Courses"}>
									<ListItemIcon sx={{ minWidth: 32 }}>
										<Icon fontSize="small" />
									</ListItemIcon>
									<ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: label === "Courses" ? 600 : 500 }} primary={label} />
								</ListItemButton>
							</ListItem>
						);
					})}
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

			<Box>
				<Card variant="outlined" sx={{ overflow: "hidden" }}>
					<Box sx={{ position: "relative", aspectRatio: "16 / 9", bgcolor: "#d9dce8" }}>
						<Box
							component="iframe"
							src={lesson.videoUrl}
							title={lesson.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
						/>
					</Box>
					<CardContent>
						<Typography variant="overline" color="text.secondary">
							{lesson.category}
						</Typography>
						<Typography variant="h5" fontWeight={700}>
							{lesson.title}
						</Typography>
						<Stack direction="row" spacing={3} mt={1} color="text.secondary">
							<Typography variant="body2">{lesson.metrics.lessons} lessons</Typography>
							<Typography variant="body2">{lesson.metrics.duration}</Typography>
							<Typography variant="body2">{lesson.metrics.reviews}</Typography>
						</Stack>
					</CardContent>
				</Card>

				<Card variant="outlined" sx={{ mt: 3, p: 2 }}>
					<Tabs value={tab} onChange={(_e, value) => setTab(value)} variant="scrollable" scrollButtons="auto" sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tab label="Overview" />
						<Tab label="Author" />
						<Tab label="Resources" />
					</Tabs>

					<Box hidden={tab !== 0} sx={{ mt: 3 }}>
						<Typography variant="h6" fontWeight={700}>
							About this lesson
						</Typography>
						<Typography color="text.secondary" sx={{ mt: 1.5 }}>
							{lesson.summary}
						</Typography>
						<Typography variant="h6" fontWeight={700} sx={{ mt: 3 }}>
							What you&apos;ll learn
						</Typography>
						<Stack spacing={1.5} mt={1.5}>
							{lesson.bulletPoints.map((item) => (
								<Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
									<Chip size="small" label="✓" color="primary" sx={{ color: "#fff", minWidth: 28 }} />
									<Typography color="text.secondary">{item}</Typography>
								</Stack>
							))}
						</Stack>
					</Box>

					<Box hidden={tab !== 1} sx={{ mt: 3 }}>
						<Stack direction="row" spacing={2} alignItems="center">
							<Avatar src={lesson.author.avatar} sx={{ width: 56, height: 56 }} />
							<Box>
								<Typography fontWeight={700}>{lesson.author.name}</Typography>
								<Typography variant="body2" color="text.secondary">
									{lesson.author.role}
								</Typography>
							</Box>
						</Stack>
						<Typography color="text.secondary" sx={{ mt: 2 }}>
							{lesson.author.bio}
						</Typography>
					</Box>

					<Box hidden={tab !== 2} sx={{ mt: 3 }}>
						{lesson.externalResources?.length ? (
							<Stack spacing={1.5}>
								{lesson.externalResources.map((resource) => (
									<Button key={resource.label} component={Link} href={resource.url} target="_blank" rel="noreferrer" sx={{ justifyContent: "flex-start" }}>
										{resource.label}
									</Button>
								))}
							</Stack>
						) : (
							<Typography variant="body2" color="text.secondary">
								External resources will appear here.
							</Typography>
						)}
					</Box>
				</Card>
			</Box>

			<Stack spacing={3}>
				<Card variant="outlined">
					<CardContent>
						<Typography variant="h6" fontWeight={700}>
							Course content
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{lesson.sections.length} sections • {lesson.metrics.duration} total runtime
						</Typography>
					</CardContent>
					<Divider />
					{lesson.sections.map((section, index) => (
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
									{section.lessons.map((lessonItem) => (
										<Stack key={lessonItem.title} direction="row" justifyContent="space-between" color="text.secondary" fontSize={14}>
											<span>{lessonItem.title}</span>
											<span>{lessonItem.time}</span>
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
							<Avatar src={lesson.author.avatar} sx={{ width: 48, height: 48 }} />
							<Box>
								<Typography fontWeight={600}>{lesson.author.name}</Typography>
								<Stack direction="row" spacing={1} alignItems="center" color="text.secondary" fontSize={13}>
									<span>{lesson.metrics.reviews}</span>
									<span>•</span>
									<span>{lesson.author.role}</span>
								</Stack>
							</Box>
						</Stack>
						<Typography color="text.secondary" sx={{ mt: 2 }}>
							{lesson.author.bio}
						</Typography>
					</CardContent>
				</Card>
			</Stack>
		</Box>
	);
}


