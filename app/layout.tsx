import type { ReactNode } from "react";
import "katex/dist/katex.min.css";
import "./globals.css";
import ThemeRegistry from "@/lib/mui/ThemeRegistry";

export const metadata = {
	title: "OldSchool CS",
	description: "Technical computer science blog with MDX and LaTeX",
	metadataBase: new URL("https://oldschoolcs.com"),
	alternates: {
		types: {
			"application/rss+xml": "/rss.xml"
		}
	}
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					{children}
				</ThemeRegistry>
			</body>
		</html>
	);
}


