import { PropsWithChildren } from "react";
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

export type TypographyProps = MuiTypographyProps & {
	/**
	 * Shorthand variants tuned to the reference design.
	 * - display: large page titles
	 * - subtitle: section descriptions
	 */
	variantMapping?: "display" | "subtitle";
};

export function Typography(props: PropsWithChildren<TypographyProps>) {
	const { children, variantMapping, sx, ...rest } = props;

	if (variantMapping === "display") {
		return (
			<MuiTypography
				variant="h3"
				component="h1"
				sx={{
					fontWeight: 800,
					letterSpacing: "-.01em",
					lineHeight: 1.15,
					...sx
				}}
				{...rest}
			>
				{children}
			</MuiTypography>
		);
	}

	if (variantMapping === "subtitle") {
		return (
			<MuiTypography
				variant="body1"
				color="text.secondary"
				sx={{ fontSize: 16, lineHeight: 1.7, ...sx }}
				{...rest}
			>
				{children}
			</MuiTypography>
		);
	}

	return (
		<MuiTypography sx={sx} {...rest}>
			{children}
		</MuiTypography>
	);
}



