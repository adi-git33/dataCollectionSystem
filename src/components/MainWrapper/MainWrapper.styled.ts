import { styled } from "@mui/material";

interface MainContainerProps {
  width?: string;
  align?: string;
  justify?: string;
  gap?: string;
} 

export const MainContainer = styled("main")<MainContainerProps>`
  flex-flow: column wrap;
  display: flex;
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  width: ${(props) => props.width || "80vw"};
  gap: ${(props) => props.gap || "0.8rem"};
  padding-bottom: 2rem;
`;
