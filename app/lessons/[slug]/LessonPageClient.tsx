"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
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
    const [shareOpen, setShareOpen] = useState(false);
    const [shareCopied, setShareCopied] = useState(false);
    const contentCardRef = useRef<HTMLDivElement>(null);

    const shareUrl = useMemo(() => {
        if (typeof window === "undefined") return "";
        const origin = window.location.origin;
        return `${origin}/lessons/${lesson.slug}`;
    }, [lesson.slug]);

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

    const handleShareClick = () => {
        setShareCopied(false);
        setShareOpen(true);
    };

    const handleShareClose = () => {
        setShareOpen(false);
    };

    const handleCopyShareLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setShareCopied(true);
            setTimeout(() => setShareCopied(false), 1600);
        } catch {
            // noop
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
                            <Button
                                variant="outlined"
                                color="inherit"
                                startIcon={<ShareIcon fontSize="small" />}
                                onClick={handleShareClick}
                            >
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

            <Dialog
                open={shareOpen}
                onClose={handleShareClose}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 2,
                        boxShadow: "0 30px 60px rgba(6, 29, 43, 0.4)"
                    }
                }}
            >
                <DialogTitle>
                    <Typography variant="h6" fontWeight={700}>
                        Share this lesson
                    </Typography>
                </DialogTitle>
                <DialogContent
                    sx={{
                        pb: 3,
                        minHeight: 120,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}
                >
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Copy the link below to share this lesson with a friend or teammate.
                    </Typography>
                    <TextField
                        fullWidth
                        value={shareUrl}
                        size="small"
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <IconButton
                                    onClick={handleCopyShareLink}
                                    size="small"
                                    color={shareCopied ? "success" : "default"}
                                    aria-label="Copy lesson link"
                                >
                                    {shareCopied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                                </IconButton>
                            )
                        }}
                    />
                    <Box sx={{ minHeight: 24, mt: 1 }}>
                        {shareCopied ? (
                            <Typography variant="caption" color="success.main" sx={{ display: "block" }}>
                                Link copied to clipboard
                            </Typography>
                        ) : null}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={handleShareClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}