import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import PageTitle from "../../components/PageTitle/PageTitle";
import CardContainer from "../../components/CardContainer/CardContainer";
import { useHistoryStore } from "../../stores/useHistoryStore";

const HomePage = () => {
  const { completedCount } = useHistoryStore();

  return (
    <div>
      <Header />
      <MainWrapper>
        <PageTitle title="Welcome to ClickPulse!" />
        <CardContainer width="15vw" height="15vh">
          <p>Total Experiments:</p>
          <h2>{completedCount}</h2>
        </CardContainer>
      </MainWrapper>
    </div>
  );
};
export default HomePage;
