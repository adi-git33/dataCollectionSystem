import { styled } from "@mui/material";
import Card from "@mui/material/Card";

interface StyledCardProps {
  width?: string;
  height?: string;
}

export const StyledCard = styled(Card)<StyledCardProps>(
  ({ theme, width, height }) => `
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px;
  background-color: ${theme.palette.secondary.main};
  color: ${theme.palette.background.default};
  width: ${width || '100%'};
  height: ${height || '100%'};
`);