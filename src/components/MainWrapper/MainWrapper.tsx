import type { ReactNode } from "react";
import { MainContainer } from "./MainWrapper.styled";

const MainWrapper = ({
  children,
  align = "flex-start",
  justify = "flex-start",
  width = "80vw",
  gap = "0.8rem",
}: {
  children: ReactNode;
  align?: string;
  justify?: string;
  width?: string;
  gap?: string;
}) => {
  return (
    <MainContainer align={align} justify={justify} width={width} gap={gap}>
      {children}
    </MainContainer>
  );
};
export default MainWrapper;
