import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import { HeaderContainer } from "./Header.styled";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../consts/routes";

const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <Logo />
      {!(location.pathname == ROUTES.NEW_EXPERIMENT) && <Navbar />}
    </HeaderContainer>
  );
};

export default Header;
