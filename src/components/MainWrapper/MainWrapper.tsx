import type { ReactNode } from "react";
import { MainContainer } from "./MainWrapper.styled";

const MainWrapper = ({ children, align = "flex-start", justify = "flex-start", width = "96vw"
 }: { children: ReactNode; align?: string; justify?: string; width?: string }) => {
  return <MainContainer align={align} justify={justify} width={width}>{children}</MainContainer>;
};
export default MainWrapper;
