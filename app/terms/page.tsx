"use client";

import Link from "next/link";
import { Box, Breadcrumbs, Card, CardContent, Chip, Container, Divider, Stack, Typography } from "@mui/material";

const termsSections = [
	{
		title: "1. Acceptance of Terms",
		body: [
			"By accessing Old School CS, subscribing to the newsletter, or enrolling in lessons, you agree to these Terms of Use.",
			"If you disagree with any part, please discontinue use."
		]
	},
	{
		title: "2. Intellectual Property",
		body: [
			"All lessons, diagrams, videos, and code samples are owned by Ashish Paudel. You may use them for personal learning, but redistribution requires written consent."
		]
	},
	{
		title: "3. User Accounts",
		body: [
			"Keep your login credentials confidential. You are responsible for all activity under your account.",
			"We reserve the right to suspend accounts that abuse the platform or violate community guidelines."
		]
	},
	{
		title: "4. Payments & Refunds",
		body: [
			"Paid cohorts and courses may be refunded within 7 days of purchase if you are unsatisfied. After that window, refunds are handled case-by-case."
		]
	},
	{
		title: "5. Community Code of Conduct",
		body: [
			"Be respectful, helpful, and constructive in discussions. Harassment, spam, or sharing offensive content will result in removal."
		]
	},
	{
		title: "6. Limitation of Liability",
		body: [
			"The site is provided “as is”. We do our best to ensure accuracy, but we are not liable for any damages arising from use."
		]
	},
	{
		title: "7. Contact",
		body: [
			"Questions about these terms? Email ",
			<Link key="legal-email" href="mailto:legal@oldschoolcs.com">
				legal@oldschoolcs.com
			</Link>,
			" anytime."
		]
	}
];

export default function TermsPage() {
	return (
		<Box sx={{ bgcolor: "#f3f7f6", minHeight: "100vh", py: { xs: 4, md: 6 } }}>
			<Container maxWidth="lg">
				<Card sx={{ borderRadius: 3, boxShadow: "0 30px 50px rgba(12,36,51,0.08)" }}>
					<CardContent sx={{ p: { xs: 3, md: 5 } }}>
						<Stack spacing={1}>
							<Breadcrumbs aria-label="breadcrumbs" sx={{ flexWrap: "wrap" }}>
								<Link href="/" style={{ color: "inherit" }}>
									Home
								</Link>
								<Typography color="text.secondary">Terms</Typography>
							</Breadcrumbs>
							<Chip label="Legal" color="primary" sx={{ alignSelf: "flex-start", color: "#fff" }} />
							<Typography variant="h3" fontWeight={700}>
								Terms of Use
							</Typography>
							<Typography color="text.secondary">Last updated: {new Date().toLocaleDateString()}</Typography>
						</Stack>

						<Divider sx={{ my: 4 }} />

						<Stack spacing={4}>
							{termsSections.map((section) => (
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


