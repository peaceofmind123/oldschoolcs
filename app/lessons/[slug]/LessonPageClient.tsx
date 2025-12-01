"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Box, Button, Container, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Lesson } from "@/lib/lessons";
import { LessonSectionContent } from "@/lib/lesson-content";
import { LessonLayout } from "@/components/lessons/LessonLayout";

type LessonPageClientProps = {
    lesson: Lesson;
    sections: LessonSectionContent[];
    prev: Lesson | null;
    next: Lesson | null;
};

export function LessonPageClient({ lesson, sections, prev, next }: LessonPageClientProps) {
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);
    const [highlightContent, setHighlightContent] = useState(false);
    const [hasBegun, setHasBegun] = useState(false);
    const contentCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!highlightContent) return undefined;
        const timer = setTimeout(() => setHighlightContent(false), 1200);
        return () => clearTimeout(timer);
    }, [highlightContent]);

    const handleBeginLesson = () => {
        const firstSectionId = lesson.sections[0]?.id ?? null;
        if (firstSectionId) {
            setActiveSectionId(firstSectionId);
            setExpandedSectionId(firstSectionId);
            setHighlightContent(true);
            setHasBegun(true);
            requestAnimationFrame(() => {
                contentCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }
    };

    return (
        <Box sx={{ bgcolor: "#f8fbfa" }}>
            <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}>
                <Stack spacing={{ xs: 2.5, md: 3.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <Button startIcon={<ArrowBackIosNewIcon fontSize="small" />}>Back to library</Button>
                        </Link>
                        <Stack direction="row" spacing={1.5}>
                            <Button variant="outlined" color="inherit" startIcon={<ShareIcon fontSize="small" />}>
                                Share
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleBeginLesson} disabled={hasBegun}>
                                Begin lesson
                            </Button>
                        </Stack>
                    </Stack>

                    <Box>
                        <LessonLayout
                            lesson={lesson}
                            sections={sections}
                            activeSectionId={activeSectionId}
                            onSectionChange={setActiveSectionId}
                            expandedSectionId={expandedSectionId}
                            onSectionExpand={setExpandedSectionId}
                            contentCardRef={contentCardRef}
                            highlightContentArea={highlightContent}
                        />
                    </Box>

                    <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={2}>
                        {prev ? (
                            <Link href={`/lessons/${prev.slug}`} style={{ textDecoration: "none" }}>
                                <Button startIcon={<ArrowBackIosNewIcon fontSize="small" />}>Previous lesson</Button>
                            </Link>
                        ) : (
                            <Button disabled startIcon={<ArrowBackIosNewIcon fontSize="small" />}>
                                Previous lesson
                            </Button>
                        )}
                        {next ? (
                            <Link href={`/lessons/${next.slug}`} style={{ textDecoration: "none" }}>
                                <Button endIcon={<ArrowForwardIcon fontSize="small" />}>Next lesson</Button>
                            </Link>
                        ) : (
                            <Button disabled endIcon={<ArrowForwardIcon fontSize="small" />}>
                                Next lesson
                            </Button>
                        )}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}