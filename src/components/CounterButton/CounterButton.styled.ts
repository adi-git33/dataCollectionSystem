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
  backgroundColor: theme.palette.secondary.main,


  color: theme.palette.background.default,
  transition: "color 0.2s ease",

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    height: "100%",
    width: `${fillPercent / 2}%`,
    backgroundColor: theme.palette.primary.main,
    transition: "width 0.3s ease-in-out",
    zIndex: -1,
  },
  "&::before": {
    right: "50%",
    borderTopLeftRadius: "inherit",
    borderBottomLeftRadius: "inherit",
  },
  "&::after": {
    left: "50%",
    borderTopRightRadius: "inherit",
    borderBottomRightRadius: "inherit",
  },

  "&:hover::before, &:hover::after": {
    backgroundColor: theme.palette.secondary.dark,
  },

  "&.Mui-disabled": {
    "&::before, &::after": {
      backgroundColor: theme.palette.customColors.gray,
    },
  },
}));
