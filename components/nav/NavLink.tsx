"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type NavLinkProps = MuiLinkProps & {
    href: string;
    label: string;
};

export function NavLink({ href, label, sx, ...rest }: NavLinkProps) {
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <MuiLink
            component={Link}
            href={href}
            underline="none"
            color={active ? "text.primary" : "text.secondary"}
            sx={{
                fontSize: 14,
                fontWeight: 500,
                "&:hover": { color: "text.primary" },
                ...sx
            }}
            {...rest}
        >
            {label}
        </MuiLink>
    );
}


