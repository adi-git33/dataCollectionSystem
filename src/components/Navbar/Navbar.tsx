import { Link, useLocation } from "react-router-dom";
import { StyledTab, NavbarContainer } from "./Navbar.styled";
import Tabs from "@mui/material/Tabs";

import { ROUTES } from "../../consts/routes";

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
        <Tabs
            value={location.pathname}
            >
        <StyledTab
            label="New Experiment"
            value={ROUTES.NEW_EXPERIMENT}
            component={Link}
            to={ROUTES.NEW_EXPERIMENT}
        />
        <StyledTab
            label="Experiment Results"
            value={ROUTES.RESULTS}
            component={Link}
            to={ROUTES.RESULTS}
        />    
        </Tabs>

    </NavbarContainer>

  );
};

export default Navbar;
