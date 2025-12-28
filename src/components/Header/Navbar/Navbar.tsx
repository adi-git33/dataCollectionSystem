import { Link, useLocation } from "react-router-dom";
import { StyledTab, NavbarContainer } from "./Navbar.styled";
import Tabs from "@mui/material/Tabs";

import { ROUTES } from "../../../consts/routes";

const Navbar = () => {
  const location = useLocation();
  const currentTab = [ROUTES.NEW_EXPERIMENT, ROUTES.RESULTS].includes(
    location.pathname
  )
    ? location.pathname
    : false;

  return (
    <NavbarContainer>
      <Tabs value={currentTab}>
        <StyledTab
          label="New Experiment"
          value={ROUTES.NEW_EXPERIMENT}
          to={ROUTES.NEW_EXPERIMENT}
          component={Link}
        />
        <StyledTab
          label="Experiment Results"
          value={ROUTES.RESULTS}
          to={ROUTES.RESULTS}
          component={Link}
        />
      </Tabs>
    </NavbarContainer>
  );
};

export default Navbar;
