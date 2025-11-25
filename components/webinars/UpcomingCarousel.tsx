"use client";

import { useMemo, useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { motion } from "framer-motion";
import { UpcomingCard } from "./UpcomingCard";

type UpcomingCarouselProps<T> = {
    items: T[];
    title?: string;
    itemsPerSlide?: number;
};

const MotionBox = motion(Box);

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

    const [page, setPage] = useState(0);

    const handlePaginate = (direction: number) => {
        if (!slides.length) return;
        const next = (page + direction + slides.length) % slides.length;
        setPage(next);
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

            <Box sx={{ overflow: "hidden" }}>
                <MotionBox
                    animate={{ x: `-${page * 100}%` }}
                    transition={{ type: "spring", stiffness: 110, damping: 20 }}
                    sx={{
                        display: "flex",
                        width: `${slides.length * 100}%`
                    }}
                >
                    {slides.map((slideItems, slideIndex) => (
                        <Box
                            key={slideIndex}
                            sx={{
                                flex: "0 0 100%",
                                px: 0
                            }}
                        >
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr", lg: "repeat(2, minmax(0, 1fr))" },
                                    gap: 3
                                }}
                            >
                                {slideItems.map((item: any) => (
                                    <Box key={item.id}>
                                        <UpcomingCard {...item} />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </MotionBox>
            </Box>
        </Box>
    );
}


