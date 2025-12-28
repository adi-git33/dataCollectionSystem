import { StyledCard } from "./CardContainer.styled";
import CardContent from "@mui/material/CardContent";

interface CardContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const CardContainer = ({ children, width, height }: CardContainerProps) => {
  return (
    <StyledCard variant="outlined" style={{ width, height }}>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};
export default CardContainer;