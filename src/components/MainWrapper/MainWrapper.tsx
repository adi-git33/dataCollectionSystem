import { ReactNode } from "react";
import { MainContainer } from "./MainWrapper.styled";

const MainWrapper = ({ children }: { children: ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};
export default MainWrapper;
