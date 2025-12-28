import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import PageTitle from "../../components/PageTitle/PageTitle";
import CardContainer from "../../components/CardContainer/CardContainer";
import { useHistoryStore } from "../../stores/useHistoryStore";
import {
  CardParagraph,
  CardInnerContainer,
  CardCount,
} from "./HomePage.styled";

const HomePage = () => {
  const { completedCount } = useHistoryStore();

  return (
    <>
      <Header />
      <MainWrapper>
        <PageTitle title="Welcome to ClickPulse!" />
        <p>
          ClickPulse is a tool for conducting and analyzing experiments about
          cognitive reactions.
        </p>
        <CardContainer width="18vw" height="18vh">
          <CardParagraph>Total Experiments</CardParagraph>
          <CardInnerContainer>
            <CardCount>{completedCount}</CardCount>
          </CardInnerContainer>
        </CardContainer>
      </MainWrapper>
    </>
  );
};
export default HomePage;
