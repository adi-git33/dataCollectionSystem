import Button from "@mui/material/Button";
import { ButtonContainer } from "./ButtonComponent.styled";

const ButtonComponent = ({
  label,
  loading = false,
  color = "primary",
  onClickHandler,
}: {
  label: string;
  loading?: boolean;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  onClickHandler: () => void;
}) => {
  return (
    <ButtonContainer>
      <Button
        variant="contained"
        color={color}
        onClick={onClickHandler}
        disabled={loading}
        loading={loading}
        loadingPosition="end"
      >
        {label}
      </Button>
    </ButtonContainer>
  );
};

export default ButtonComponent;
