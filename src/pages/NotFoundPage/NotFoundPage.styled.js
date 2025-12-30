import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const NotFoundContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "60vh",
  textAlign: "center",
  width: "100%",
  gap: 10,
}));

export const ErrorCode = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontSize: "5rem",

}));

export const ErrorMessage = styled("h5")(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.text.secondary,
  fontWeight: 500,
}));
