import { useState } from "react";
import { StyledCounterButton } from "./CounterButton.styled";

interface CounterButtonProps {
  label?: string;
  maxClicks?: number;
  onMaxReached?: () => void;
  onClick?: () => void;
  disabled?: boolean;
}

const CounterButton = ({
  label = "Clicks",
  maxClicks = 10,
  onMaxReached,
  onClick,
  disabled = false,
}: CounterButtonProps) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (disabled) return;
    
    if (onClick) {
      onClick();
    }
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === maxClicks && onMaxReached) {
      onMaxReached();
    }
  };

  const fillPercent = (count / maxClicks) * 100;

  return (
    <StyledCounterButton
      variant="contained"
      fillPercent={fillPercent}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}: {count}
    </StyledCounterButton>
  );
};

export default CounterButton;
