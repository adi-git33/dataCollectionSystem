// Styled & Components
import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import PageTitle from "../../components/PageTitle/PageTitle";
// Logic
import { useHistoryStore } from "../../store/useHistoryStore";


const ExperimentResultsPage = () => {
      const { lastSession, completedCount } = useHistoryStore();
    
  return (
    <>
      <Header />
      <MainWrapper>
        <PageTitle title="Experiment Results" />
        {
            lastSession ? (
                <div>
                    <h2>Experiment #{completedCount} Results</h2>
                    <p><strong>Word 1:</strong> {}</p>
                    <p><strong>Word 2:</strong> {}</p>
                    </div>
            ) : (
                <p>No experiment data available.</p>
            )
        }
      </MainWrapper>
    </>

  );
};

export default ExperimentResultsPage;
