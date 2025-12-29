import AdsClickIcon from "@mui/icons-material/AdsClick";
import { LogoContainer, LogoText } from "./Logo.styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../consts/routes";

interface LogoProps {
  onClick?: (e: React.MouseEvent) => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <Link
      to={ROUTES.HOME}
      style={{ textDecoration: "none" }}
      onClick={onClick}
    >
      <LogoContainer>
        <AdsClickIcon color="primary" />
        <LogoText>ClickPulse</LogoText>
      </LogoContainer>
    </Link>
  );
};
export default Logo;
