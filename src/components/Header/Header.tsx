import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import { HeaderContainer } from "./Header.styled";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../consts/routes";

interface HeaderProps {
  onLogoClick?: (e: React.MouseEvent) => void;
}

const Header = ({ onLogoClick }: HeaderProps) => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <Logo onClick={onLogoClick} />
      {!(location.pathname == ROUTES.NEW_EXPERIMENT) && <Navbar />}
    </HeaderContainer>
  );
};

export default Header;
