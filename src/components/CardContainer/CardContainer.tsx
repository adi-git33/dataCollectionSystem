import { StyledCard, StyledCardContent } from "./CardContainer.styled";

interface CardContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const CardContainer = ({ children, width, height }: CardContainerProps) => {
  return (
    <StyledCard variant="outlined" style={{ width, height }}>
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
};
export default CardContainer;