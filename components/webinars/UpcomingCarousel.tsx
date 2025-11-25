"use client";

import { useMemo, useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { AnimatePresence, motion } from "framer-motion";
import { UpcomingCard } from "./UpcomingCard";

type UpcomingCarouselProps<T> = {
    items: T[];
    title?: string;
    itemsPerSlide?: number;
};

const MotionBox = motion(Box);
const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0
    }),
    center: {
        x: "0%",
        opacity: 1
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0
    })
};

export function UpcomingCarousel<T extends { id: number | string }>({
    items,
    title = "Upcoming",
    itemsPerSlide = 2
}: UpcomingCarouselProps<T>) {
    const slides = useMemo(() => {
        const chunked: T[][] = [];
        for (let i = 0; i < items.length; i += itemsPerSlide) {
            chunked.push(items.slice(i, i + itemsPerSlide));
        }
        return chunked.length ? chunked : [[]];
    }, [items, itemsPerSlide]);

    const [state, setState] = useState({ page: 0, direction: 0 });

    const handlePaginate = (direction: number) => {
        if (slides.length <= 1) return;
        setState((prev) => {
            const nextPage = (prev.page + direction + slides.length) % slides.length;
            return { page: nextPage, direction };
        });
    };

    return (
        <Box mt={6}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h6" fontWeight={600}>
                    {title}
                </Typography>
                <Stack direction="row" spacing={1}>
                    <IconButton
                        size="small"
                        onClick={() => handlePaginate(-1)}
                        disabled={slides.length <= 1}
                        sx={{ border: "1px solid rgba(244,251,250,0.3)", color: "#f4fbfa" }}
                        aria-label="Previous upcoming webinars"
                    >
                        <ArrowBackRoundedIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={() => handlePaginate(1)}
                        disabled={slides.length <= 1}
                        sx={{ border: "1px solid rgba(244,251,250,0.3)", color: "#f4fbfa" }}
                        aria-label="Next upcoming webinars"
                    >
                        <ArrowForwardRoundedIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </Stack>

            <Box sx={{ position: "relative", overflow: "hidden" }}>
                <AnimatePresence initial={false} custom={state.direction}>
                    <MotionBox
                        key={state.page}
                        custom={state.direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ x: { type: "spring", stiffness: 120, damping: 25 }, opacity: { duration: 0.2 } }}
                        sx={{
                            width: "100%"
                        }}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", lg: "repeat(2, minmax(0, 1fr))" },
                                gap: 3
                            }}
                        >
                            {slides[state.page].map((item: any) => (
                                <Box key={item.id}>
                                    <UpcomingCard {...item} />
                                </Box>
                            ))}
                        </Box>
                    </MotionBox>
                </AnimatePresence>
            </Box>
        </Box>
    );
}


