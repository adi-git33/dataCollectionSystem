import { Link, useLocation } from "react-router-dom";
import { LinkStyle, NavbarContainer } from "./Navbar.styled";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { ROUTES } from "../../consts/routes";

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
        <Tabs
            value={location.pathname}
            >
        <Tab
            label={<LinkStyle>New Experiment</LinkStyle>}
            value={ROUTES.NEW_EXPERIMENT}
            component={Link}
            to={ROUTES.NEW_EXPERIMENT}
        />
        <Tab
            label={<LinkStyle>Experiment Results</LinkStyle>}
            value={ROUTES.RESULTS}
            component={Link}
            to={ROUTES.RESULTS}
        />    
        </Tabs>

    </NavbarContainer>

  );
};

export default Navbar;
