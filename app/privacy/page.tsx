"use client";

import Link from "next/link";
import { Box, Breadcrumbs, Card, CardContent, Chip, Container, Divider, Link as MuiLink, Stack, Typography } from "@mui/material";

const sections = [
	{
		id: "collect",
		title: "What personal information we collect",
		body: [
			"We only collect the information you submit when you subscribe, enroll in lessons, comment, or contact support.",
			"This includes your name, email, billing metadata (handled securely by our payment partners), and privacy-friendly analytics such as page views and session duration."
		]
	},
	{
		id: "use",
		title: "What we do with the personal information we collect",
		body: [
			"We send lesson updates, newsletters, community announcements, and respond to support requests.",
			"Aggregated analytics help us understand which topics resonate so we can build better CS lessons. We never sell your data."
		]
	},
	{
		id: "disclose",
		title: "When we disclose personal information",
		body: ["We share data only with trusted vendors who enable billing, authentication, or analytics, and only for the purposes described here."]
	},
	{
		id: "cookies",
		title: "How we use cookies & technology",
		body: [
			"We use first-party cookies to remember preferences and to keep you signed in. Our analytics tooling is privacy-first—no cross-site tracking."
		]
	},
	{
		id: "security",
		title: "Security",
		body: [
			"We encrypt data in transit and at rest, and partner with industry-standard infrastructure providers. Access to customer data is restricted to essential staff only."
		]
	},
	{
		id: "transfer",
		title: "Transfer of information",
		body: [
			"We operate internationally and may store data in the United States or other regions with adequate protections. When we transfer data, we rely on standard contractual clauses or equivalent safeguards."
		]
	},
	{
		id: "links",
		title: "Links to other websites",
		body: [
			"Some lessons reference external resources. We are not responsible for the privacy practices of those sites, so please review their policies as well."
		]
	},
	{
		id: "choices",
		title: "Your choices",
		body: ["You can update your profile, adjust email preferences, or delete your account at any time from your settings panel or by contacting support."]
	},
	{
		id: "access",
		title: "Accessing & correcting your information",
		body: [
			"Need a copy of your data or want to correct something? Email hello@oldschoolcs.com and we’ll respond within two business days."
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

						<Box
							sx={{
								display: "grid",
								gap: { xs: 3, md: 4 },
								gridTemplateColumns: { xs: "1fr", md: "minmax(0, 320px) 1fr" },
								alignItems: "start"
							}}
						>
							<Box>
								<Card variant="outlined" sx={{ position: { md: "sticky" }, top: 24 }}>
									<CardContent>
										<Typography variant="subtitle1" fontWeight={700}>
											Table of contents
										</Typography>
										<Divider sx={{ my: 2 }} />
										<Stack spacing={1.25}>
											{sections.map((section) => (
												<MuiLink
													key={section.id}
													href={`#${section.id}`}
													underline="hover"
													color="text.secondary"
													sx={{
														fontSize: 14,
														scrollBehavior: "smooth",
														"&:hover": { color: "text.primary" }
													}}
												>
													{section.title}
												</MuiLink>
											))}
										</Stack>
									</CardContent>
								</Card>
							</Box>
							<Box>
								<Stack spacing={4}>
									{sections.map((section) => (
										<Box key={section.id} id={section.id}>
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
							</Box>
						</Box>
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
}


