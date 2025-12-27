import { styled } from "@mui/material";
import Tab from "@mui/material/Tab";

export const NavbarContainer = styled("div")`
    display: flex;
    align-items: center;
    flex-flow: row;
`;

export const StyledTab = styled(Tab)(({ theme }) => `
    color: ${theme.palette.text.primary};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    text-transform: capitalize;
    transition: color 0.3s ease-in-out, font-weight 0.3s ease-in-out;

    &:hover {
        color: ${theme.palette.primary.main};
        font-weight: 600;
    }
    &.Mui-selected {
        color: ${theme.palette.primary.main};
    }
`);