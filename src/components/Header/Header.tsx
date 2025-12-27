import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
