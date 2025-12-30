import { styled } from "@mui/material/styles";

export const HeaderContainer = styled("header")(({ theme }) => `
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 80vw;
  height: 10vh;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${theme.palette.background.default};
`);
