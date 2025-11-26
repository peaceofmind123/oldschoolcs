"use client";

import Link from "next/link";
import { Box, Breadcrumbs, Card, CardContent, Chip, Container, Divider, Stack, Typography } from "@mui/material";

const sections = [
	{
		title: "1. Information We Collect",
		body: [
			"We only collect the information you voluntarily provide when you subscribe, enroll in lessons, leave comments, or contact support.",
			"This may include your name, email address, payment details processed securely by our billing partners, and analytics data (page views, session duration) gathered via privacy-conscious tooling."
		]
	},
	{
		title: "2. How We Use Your Information",
		body: [
			"We send lesson updates, newsletters, community announcements, and respond to your support requests.",
			"Aggregated analytics help us understand which topics resonate so we can build better CS lessons. We never sell your data."
		]
	},
	{
		title: "3. Cookies & Analytics",
		body: [
			"We use minimal, first-party cookies to remember preferences. We rely on privacy-first analytics (no cross-site tracking) to understand usage."
		]
	},
	{
		title: "4. Data Retention & Security",
		body: [
			"Lesson enrollments and account data are retained while you have an account. You can request deletion anytime.",
			"We encrypt data in transit and at rest, and partner with industry-standard providers for billing and authentication."
		]
	},
	{
		title: "5. Contact",
		body: [
			"Questions? Email us at ",
			<Link href="mailto:hello@oldschoolcs.com">hello@oldschoolcs.com</Link>,
			" and we’ll respond within 2 business days."
		]
	}
];

export default function PrivacyPage() {
	return (
		<Box sx={{ bgcolor: "#f3f7f6", minHeight: "100vh", py: { xs: 4, md: 6 } }}>
			<Container maxWidth="lg">
				<Card sx={{ borderRadius: 3, boxShadow: "0 30px 50px rgba(12,36,51,0.08)" }}>
					<CardContent sx={{ p: { xs: 3, md: 5 } }}>
						<Stack spacing={1}>
							<Breadcrumbs aria-label="breadcrumbs">
								<Link href="/" style={{ color: "inherit" }}>
									Home
								</Link>
								<Typography color="text.secondary">Privacy</Typography>
							</Breadcrumbs>
							<Chip label="Legal" color="primary" sx={{ alignSelf: "flex-start", color: "#fff" }} />
							<Typography variant="h3" fontWeight={700}>
								Privacy Policy
							</Typography>
							<Typography color="text.secondary">Last updated: {new Date().toLocaleDateString()}</Typography>
						</Stack>

						<Divider sx={{ my: 4 }} />

						<Stack spacing={4}>
							{sections.map((section) => (
								<Box key={section.title}>
									<Typography variant="h5" fontWeight={600}>
										{section.title}
									</Typography>
									<Stack spacing={1.5} mt={1.5} color="text.secondary">
										{section.body.map((paragraph, index) => (
											<Typography key={index} component="div">
												{paragraph}
											</Typography>
										))}
									</Stack>
								</Box>
							))}
						</Stack>
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
}


