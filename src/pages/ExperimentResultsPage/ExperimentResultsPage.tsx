import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Grid, Typography } from "@mui/material";
import ResultCard from "../../components/ResultCard/ResultCard"; // Adjust path as needed
import { ResultsContainer, GridStyled } from "./ExperimentResultsPage.styled";
import { useExperimentResults } from "./hooks/useExperimentResults";

const ExperimentResultsPage = () => {
  const {
    lastSession,
    page1Columns,
    page2Columns,
    page1Data,
    page2Data,
    part1Stats,
    part2Stats,
  } = useExperimentResults();

  if (!lastSession) {
    return (
      <>
        <Header />
        <MainWrapper>
          <PageTitle title="Experiment Results" />
          <p>No experiment data available.</p>
        </MainWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <MainWrapper>
        <PageTitle title="Experiment Results" />

        <ResultsContainer>
          <Typography variant="body2" sx={{ fontFamily: "monospace", mt: 1 }}>
            <strong>ID:</strong> {lastSession.id}
          </Typography>
        </ResultsContainer>

        <GridStyled container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ResultCard
              title="Part 1: Interactions"
              stats={part1Stats}
              columns={page1Columns}
              data={page1Data}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ResultCard
              title="Part 2: Bucket Task"
              stats={part2Stats}
              columns={page2Columns}
              data={page2Data}
            />
          </Grid>
        </GridStyled>
      </MainWrapper>
    </>
  );
};

export default ExperimentResultsPage;
