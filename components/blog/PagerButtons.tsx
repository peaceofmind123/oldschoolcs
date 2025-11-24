import { IconButton, Stack } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

type PagerButtonsProps = {
	onPrev?: () => void;
	onNext?: () => void;
};

export function PagerButtons({ onPrev, onNext }: PagerButtonsProps) {
	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<IconButton size="small" onClick={onPrev} sx={{ border: 1, borderColor: "divider" }}>
				<ArrowBackRoundedIcon fontSize="small" />
			</IconButton>
			<IconButton size="small" onClick={onNext} sx={{ border: 1, borderColor: "divider" }}>
				<ArrowForwardRoundedIcon fontSize="small" />
			</IconButton>
		</Stack>
	);
}


