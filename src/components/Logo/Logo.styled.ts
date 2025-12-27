import { styled } from "@mui/material";

export const LogoContainer = styled("div")`
  display: flex;
  flex-flow: row;
  gap: 0.5rem;
  cursor: pointer;
`;

export const LogoText = styled("span")(({ theme }) => `
    color: ${theme.palette.secondary.main};
    font-family: 'Comfortaa', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: 0.3rem;
`);