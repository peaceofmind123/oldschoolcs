"use client";

import Link from "next/link";
import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";
import { Button } from "@/components/ui/Button";
import { NavLink } from "./NavLink";

export function Navbar() {
    return (
        <AppBar position="sticky" elevation={0} color="transparent" sx={{ borderBottom: 1, borderColor: "divider", backdropFilter: "blur(8px)" }}>
            <Toolbar component={Container} disableGutters sx={{ minHeight: 64 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                        component={Link}
                        href="/"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "text.primary",
                            fontWeight: 700
                        }}
                    >
                        <Box sx={{ width: 24, height: 24, borderRadius: 1, bgcolor: "primary.main", color: "#fff", fontSize: 12, display: "grid", placeItems: "center", mr: 1 }}>
                            OS
                        </Box>
                        Untitled UI
                    </Box>
                </Box>

                <Stack direction="row" spacing={3} sx={{ ml: 4, display: { xs: "none", md: "flex" } }}>
                    <NavLink href="/" label="Home" />
                    <NavLink href="/products" label="Products" />
                    <NavLink href="/solutions" label="Solutions" />
                    <NavLink href="/pricing" label="Pricing" />
                    <NavLink href="/resources" label="Resources" />
                    <NavLink href="/company" label="Company" />
                    <NavLink href="/careers" label="Careers" />
                </Stack>

                <Box sx={{ ml: "auto" }}>
                    <Button size="small">Get started</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}


