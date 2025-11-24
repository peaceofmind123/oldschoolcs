import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#0d4c5b",
			light: "#166370",
			dark: "#042c35",
			contrastText: "#f4fbfa"
		},
		secondary: {
			main: "#61e0c5",
			contrastText: "#05262c"
		},
		background: {
			default: "#f3f7f6",
			paper: "#ffffff"
		},
		text: {
			primary: "#0d1f28",
			secondary: "#4e6571"
		},
		divider: "rgba(9, 46, 56, 0.12)"
	},
	typography: {
		fontFamily: [
			"Sora",
			"Inter",
			"ui-sans-serif",
			"system-ui",
			"-apple-system",
			"Segoe UI",
			"Roboto",
			"Ubuntu",
			"Cantarell",
			"Noto Sans",
			"Helvetica Neue",
			"Arial"
		].join(","),
		h1: { fontWeight: 700, letterSpacing: "-0.02em" },
		h2: { fontWeight: 600, letterSpacing: "-0.01em" },
		h3: { fontWeight: 600 },
		button: { fontWeight: 600, textTransform: "none" }
	},
	shape: {
		borderRadius: 1
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true
			},
			styleOverrides: {
				root: {
					borderRadius: 1,
					paddingInline: 22
				},
				outlined: {
					borderColor: "rgba(13,76,91,0.2)"
				}
			}
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 1,
					boxShadow: "0 30px 60px rgba(10, 52, 70, 0.08)"
				}
			}
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: "lg"
			}
		}
	}
});

export default theme;

