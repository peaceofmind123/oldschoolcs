"use client";

import React, { RefObject, useMemo } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Lesson } from "@/lib/lessons";
import { LessonSectionContent } from "@/lib/lesson-content";

type LessonLayoutProps = {
	lesson: Lesson;
	sections: LessonSectionContent[];
	activeSectionId: string | null;
	onSectionChange: (sectionId: string | null) => void;
	expandedSectionId: string | null;
	onSectionExpand: (sectionId: string | null) => void;
	contentCardRef?: RefObject<HTMLDivElement | null>;
	highlightContentArea?: boolean;
};

export function LessonLayout({
	lesson,
	sections,
	activeSectionId,
	onSectionChange,
	expandedSectionId,
	onSectionExpand,
	contentCardRef,
	highlightContentArea = false
}: LessonLayoutProps) {
	const activeSection = useMemo(() => sections.find((item) => item.id === activeSectionId) ?? null, [sections, activeSectionId]);
	const hasActiveSection = Boolean(activeSection);

	return (
		<Box
			sx={{
				display: "grid",
				gap: { xs: 3, lg: 4 },
				gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 320px" }
			}}
		>
			<Box>
				{!hasActiveSection ? (
					<Card
						variant="outlined"
						sx={{
							overflow: "hidden",
							maxWidth: { lg: 1040 },
							mx: { lg: "auto" }
						}}
					>
						<Box
							sx={{
								position: "relative",
								aspectRatio: "16 / 9",
								bgcolor: "#d9dce8",
								maxHeight: { xs: 320, md: 420, lg: 460 },
								width: "100%",
								mx: "auto"
							}}
						>
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
				) : null}
				<Box
					sx={{
						mt: { xs: hasActiveSection ? 0 : 3, md: hasActiveSection ? 1 : 4 },
						borderRadius: 1,
						border: "1px solid rgba(5,46,53,0.08)",
						backgroundColor: "#fff",
						boxShadow: highlightContentArea ? "0 0 0 3px rgba(97,224,197,0.35)" : "0 35px 60px rgba(5,46,53,0.05)",
						p: { xs: 3, md: 4 },
						maxWidth: { lg: 1040 },
						mx: { lg: "auto" },
						transition: "box-shadow 0.3s ease, border-color 0.3s ease"
					}}
					ref={contentCardRef}
				>
					{activeSection ? (
						<Stack spacing={2.5}>
							<Box>
								<Typography variant="overline" color="text.secondary">
									Section
								</Typography>
								<Typography variant="h4" fontWeight={700}>
									{activeSection.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{activeSection.total}
								</Typography>
							</Box>
							<Divider />
							<Box
								sx={{
									fontSize: 15,
									lineHeight: 1.75,
									color: "text.secondary",
									"& .katex-display": { overflowX: "auto" },
									"& iframe": { width: "100%", border: 0, borderRadius: 2, minHeight: 320 },
									"& img": { maxWidth: "100%", borderRadius: 2 }
								}}
								dangerouslySetInnerHTML={{ __html: activeSection.html }}
							/>
						</Stack>
					) : (
						<Stack spacing={1.5}>
							<Typography variant="h5" fontWeight={600}>
								Start your lesson
							</Typography>
							<Typography color="text.secondary">
								Select a section from the Course content panel or press “Begin lesson” to dive into the first section.
							</Typography>
						</Stack>
					)}
				</Box>
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
					{lesson.sections.map((section) => {
						const isExpanded = section.id === expandedSectionId;
						return (
							<Accordion
								key={section.title}
								disableGutters
								expanded={isExpanded}
								onChange={(_event, expanded) => onSectionExpand(expanded ? section.id : null)}
							>
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
											<Box
												key={lessonItem.title}
												onClick={() => {
													onSectionExpand(section.id);
													onSectionChange(section.id);
												}}
											sx={{
												display: "flex",
												justifyContent: "space-between",
												color: "text.secondary",
												fontSize: 14,
												cursor: "pointer",
												"&:hover": { color: "text.primary" }
											}}
											>
												<span>{lessonItem.title}</span>
												<span>{lessonItem.time}</span>
											</Box>
										))}
									</Stack>
								</AccordionDetails>
							</Accordion>
						);
					})}
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
