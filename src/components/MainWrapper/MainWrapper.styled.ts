import { styled } from "@mui/material";

interface MainContainerProps {
  width?: string;
  align?: string;
  justify?: string;
} 

export const MainContainer = styled("main")<MainContainerProps>`
  flex-flow: column wrap;
  display: flex;
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  width: ${(props) => props.width || "96vw"};
`;
