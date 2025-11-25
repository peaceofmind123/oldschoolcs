import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material";

const defaultCategories = [
	"Design",
	"Product",
	"Software Engineering",
	"Customer Success",
	"Leadership",
	"Management"
];

type SidebarProps = {
	title?: string;
	categories?: string[];
};

export function Sidebar({ title = "View all", categories = defaultCategories }: SidebarProps) {
	return (
		<Box sx={{ position: "sticky", top: 96 }}>
			<Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: ".02em" }}>
				{title}
			</Typography>
			<List dense sx={{ mt: 1, borderLeft: 1, borderColor: "divider" }}>
				{categories.map((c) => (
					<ListItemButton key={c} sx={{ pl: 2 }}>
						<ListItemText primaryTypographyProps={{ fontSize: 13 }} primary={c} />
					</ListItemButton>
				))}
			</List>
		</Box>
	);
}



