import Link from "next/link";
import { Button, Stack, Typography } from "@mui/material";

export default function HomePage() {
	return (
		<main className="container">
			<Stack spacing={2} sx={{ py: 4 }}>
				<Typography variant="h3" component="h1">MUI is configured</Typography>
				<Typography color="text.secondary">
					This page renders with Material UI theme, Typography, and CssBaseline.
				</Typography>
				<Stack direction="row" spacing={2}>
					<Button variant="contained">Primary action</Button>
					<Button variant="outlined">Secondary</Button>
					<Link href="/blog"><Button>Go to blog</Button></Link>
				</Stack>
			</Stack>
		</main>
	);
}


