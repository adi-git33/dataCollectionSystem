import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import PageTitle from "../../components/PageTitle/PageTitle";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainWrapper>
        <PageTitle title="Welcome to ClickPulse!" />
      </MainWrapper>
    </div>
  );
};
export default HomePage;
