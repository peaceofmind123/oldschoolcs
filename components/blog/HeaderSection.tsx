import { Stack, Divider } from "@mui/material";
import { Typography } from "@/components/ui/Typography";

type HeaderSectionProps = {
	title: string;
	description: string;
};

export function HeaderSection({ title, description }: HeaderSectionProps) {
	return (
		<Stack spacing={1.5} sx={{ py: 4 }}>
			<Divider />
			<Typography variantMapping="display">{title}</Typography>
			<Typography variantMapping="subtitle">{description}</Typography>
			<Divider sx={{ mt: 1.5 }} />
		</Stack>
	);
}



