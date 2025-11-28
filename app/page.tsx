"use client";

import { Box, Button, Chip, Container, InputAdornment, MenuItem, Pagination, Stack, TextField, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { NavBar } from "@/components/webinars/NavBar";
import { WebinarCard } from "@/components/webinars/WebinarCard";
import { CtaPanel } from "@/components/webinars/CtaPanel";
import { SiteFooter } from "@/components/webinars/SiteFooter";
import { UpcomingCarousel } from "@/components/webinars/UpcomingCarousel";
import { getBrowseLessons, getFeaturedLessons } from "@/lib/lessons";

const featuredLessons = getFeaturedLessons();
const browseLessons = getBrowseLessons(6);

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
						<UpcomingCarousel title="Featured" lessons={featuredLessons} />
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
					{browseLessons.map((lesson) => (
						<Box key={lesson.slug}>
							<WebinarCard lesson={lesson} />
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

