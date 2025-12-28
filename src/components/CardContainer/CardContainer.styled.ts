import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface StyledCardProps {
  width?: string;
  height?: string;
}

export const StyledCard = styled(Card)<StyledCardProps>(
  ({ theme, width, height }) => `
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 12px;
  padding: 0.2rem 0.1rem;
  margin: 0.7rem 0;
  background-color: ${theme.palette.secondary.main};
  color: ${theme.palette.background.default};
  width: ${width || '100%'};
  height: ${height || '100%'};
`);

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;  
`; 