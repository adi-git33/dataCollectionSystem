import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledCounterButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "fillPercent",
})<{ fillPercent: number }>(({ theme, fillPercent }) => ({
  position: "relative",
  overflow: "hidden", 
  minWidth: "150px",
  fontWeight: "bold",
  zIndex: 1,
  backgroundColor: theme.palette.customColors.gray,
  color: theme.palette.background.default,
  transition: "color 0.2s ease",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",

    width: `${fillPercent}%`,
    backgroundColor: theme.palette.secondary.main,
    transition: "width 0.3s ease-in-out",
    zIndex: -1, 
  },

  "&:hover::before": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));