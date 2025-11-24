import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

export type ButtonProps = MuiButtonProps & {
	variantStyle?: "primary" | "ghost";
};

export function Button(props: ButtonProps) {
	const { variantStyle = "primary", sx, ...rest } = props;

	if (variantStyle === "ghost") {
		return (
			<MuiButton
				variant="outlined"
				color="inherit"
				sx={{
					borderColor: "divider",
					bgcolor: "background.paper",
					textTransform: "none",
					"&:hover": { borderColor: "text.secondary", bgcolor: "grey.50" },
					...sx
				}}
				{...rest}
			/>
		);
	}

	return (
		<MuiButton
			variant="contained"
			color="primary"
			sx={{ textTransform: "none", fontWeight: 600, ...sx }}
			{...rest}
		/>
	);
}


