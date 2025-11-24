import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#2563eb"
		},
		secondary: {
			main: "#6b7280"
		},
		background: {
			default: "#ffffff"
		}
	},
	typography: {
		fontFamily: [
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
		h1: { fontWeight: 800 },
		h2: { fontWeight: 700 },
		h3: { fontWeight: 700 }
	},
	shape: {
		borderRadius: 8
	}
});

export default theme;


