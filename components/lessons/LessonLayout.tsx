"use client";

import React, { MutableRefObject, RefObject, useEffect, useMemo, useRef } from "react";
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
	contentCardRef?: MutableRefObject<HTMLDivElement | null> | null;
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
	const cardContainerRef = useRef<HTMLDivElement | null>(null);
	const htmlContainerRef = useRef<HTMLDivElement | null>(null);

	const handleCardRef = (node: HTMLDivElement | null) => {
		cardContainerRef.current = node;
		if (contentCardRef) {
			contentCardRef.current = node;
		}
	};

	useEffect(() => {
		const container = htmlContainerRef.current;
		if (!container) return;

		const handleCopyClick = async (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			const button = target.closest(".lesson-copy-button") as HTMLElement;
			if (!button) return;

			event.preventDefault();
			event.stopPropagation();

			const wrapper = button.closest(".lesson-code-block");
			const codeElement = wrapper?.querySelector("pre");
			const text = codeElement?.textContent ?? "";
			if (!text) return;

			const svg = button.querySelector("svg");
			if (!svg) return;

			try {
				await navigator.clipboard.writeText(text);
				// Add success state class
				button.classList.add("copy-success");
				// Replace with checkmark icon
				svg.innerHTML = `
					<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
				`;
			} catch {
				// Keep copy icon on error
			}

			setTimeout(() => {
				if (svg) {
					svg.innerHTML = `
						<rect width="14" height="14" x="8" y="8" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					`;
				}
				// Remove success state class
				button.classList.remove("copy-success");
			}, 1500);
		};

		container.addEventListener("click", handleCopyClick);
		return () => {
			container.removeEventListener("click", handleCopyClick);
		};
	}, [activeSection?.id]);

	return (
		<Box
			sx={{
				display: "grid",
				gap: { xs: 3, lg: 4 },
				gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 320px" }
			}}
		>
			<Box>
				<Stack spacing={3}>
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
							borderRadius: 1,
							border: "1px solid rgba(5,46,53,0.08)",
							backgroundColor: "#fff",
							boxShadow: highlightContentArea ? "0 0 0 3px rgba(97,224,197,0.35)" : "0 35px 60px rgba(5,46,53,0.05)",
							p: { xs: 3, md: 4 },
							maxWidth: { lg: 1040 },
							mx: { lg: "auto" },
							transition: "box-shadow 0.3s ease, border-color 0.3s ease"
						}}
						ref={handleCardRef}
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
										color: "text.primary",
										"& .katex-display": { overflowX: "auto" },
										"& iframe": { width: "100%", border: 0, borderRadius: 2, minHeight: 320 },
										"& img": { maxWidth: "100%", borderRadius: 2 },
										"& .lesson-code-block": {
											position: "relative",
											backgroundColor: "#081422",
											color: "#f8fbfa",
											borderRadius: 2,
											overflow: "hidden",
											margin: "22px 0",
											border: "1px solid rgba(244,251,250,0.08)",
											boxShadow: "0 25px 45px rgba(5, 19, 30, 0.35)"
										},
										"& .lesson-code-block pre": {
											margin: 0,
											padding: "28px 28px 22px 28px",
											overflowX: "auto",
											fontSize: 14,
											backgroundColor: "transparent",
											fontFamily: [
												"Fira Code",
												"Source Code Pro",
												"ui-monospace",
												"SFMono-Regular",
												"Menlo",
												"Monaco",
												"Consolas",
												"Liberation Mono",
												"Courier New",
												"monospace"
											],
											"& code": {
												fontFamily: "inherit"
											}
										},
										"& .lesson-code-block code": {
											background: "transparent",
											padding: 0,
											color: "inherit",
											fontSize: "inherit",
											fontFamily: [
												"Fira Code",
												"Source Code Pro",
												"ui-monospace",
												"SFMono-Regular",
												"Menlo",
												"Monaco",
												"Consolas",
												"Liberation Mono",
												"Courier New",
												"monospace"
											]
										},
										"& .lesson-copy-button": {
											position: "absolute",
											top: 12,
											right: 14,
											backgroundColor: "rgba(244,251,250,0.12)",
											color: "#f4fbfa",
											border: "1px solid rgba(244,251,250,0.3)",
											borderRadius: "6px",
											padding: "8px",
											width: "32px",
											height: "32px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											cursor: "pointer",
											transition: "background-color 0.3s ease, transform 0.2s ease, border-color 0.3s ease",
											backdropFilter: "blur(6px)",
											"& svg": {
												width: "16px",
												height: "16px",
												transition: "transform 0.2s ease"
											}
										},
										"& .lesson-copy-button:hover": {
											backgroundColor: "rgba(244,251,250,0.25)",
											color: "#f4fbfa"
										},
										"& .lesson-copy-button.copy-success": {
											backgroundColor: "rgba(97,224,197,0.25)",
											borderColor: "rgba(97,224,197,0.6)",
											color: "#61e0c5",
											transform: "scale(1.1)",
											"& svg": {
												transform: "scale(1.1)"
											}
										}
									}}
									ref={htmlContainerRef}
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
				</Stack>
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
