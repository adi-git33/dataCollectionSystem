// Styled & Components
import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import PageTitle from "../../components/PageTitle/PageTitle";
import TableComponent from "../../components/TableComponent/TableComponent";
import {
  ResultsContainer,
  ExperimentPartContainer,
} from "./ExperimentResultsPage.styled";
// Logic
import { useHistoryStore } from "../../store/useHistoryStore";

const ExperimentResultsPage = () => {
  const { lastSession } = useHistoryStore();

  const page1Columns = [
    { field: "buttonType", headerName: "Interaction Type" },
    { field: "value", headerName: "Value" },
    { field: "timestamp", headerName: "Timestamp" },
  ];

  const page2Columns = [
    { field: "count", headerName: "Click Count" },
    { field: "timestamp", headerName: "Timestamp" },
  ];

  const page1Data =
    lastSession?.page1Clicks.map((click) => ({
      buttonType: click.buttonType,
      value: click.value,
      timestamp: new Date(click.timestamp).toLocaleString(),
    })) || [];

  const page2Data =
    lastSession?.page2BucketClicks.map((timestamp, index) => ({
      count: index + 1,
      timestamp: new Date(timestamp).toLocaleString(),
    })) || [];

  return (
    <>
      <Header />
      <MainWrapper>
        <PageTitle title="Experiment Results" />
        {lastSession ? (
          <ResultsContainer>
            <ExperimentPartContainer>
              <ResultsContainer>
                <h3>Page 1 Data</h3>
                <TableComponent columns={page1Columns} data={page1Data} />
              </ResultsContainer>
              <ResultsContainer>
                <h3>Page 2 Bucket Data</h3>
                <p>
                  <b>Total Bucket Duration:</b>{" "}
                  {lastSession.page2TotalDuration
                    ? (lastSession.page2TotalDuration / 1000).toFixed(2)
                    : 0}{" "}
                  seconds
                </p>
                <p>
                  <b>Page 2 Submit Time:</b>{" "}
                  {lastSession.page2SubmitTime
                    ? new Date(lastSession.page2SubmitTime).toLocaleString()
                    : "N/A"}
                </p>
                <TableComponent columns={page2Columns} data={page2Data} />
              </ResultsContainer>
            </ExperimentPartContainer>
          </ResultsContainer>
        ) : (
          <p>No experiment data available.</p>
        )}
      </MainWrapper>
    </>
  );
};

export default ExperimentResultsPage;
