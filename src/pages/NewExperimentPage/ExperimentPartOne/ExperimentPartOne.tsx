// Styled & Components
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import LikertScale from "../../../components/LikertScale/LikertScale";
import {
  ButtonsContainer,
  NextButtonContainer,
  StyledPaper,
} from "../NewExperimentPage.styled";

// Images
import clicksImage from "@assets/clicks.png";

interface ExperimentPartOneProps {
  randomWords: string[];
  handleWordChange: (index: number) => void;
  handleNext: () => void;
  likertValue: number | null;
  handleLikertChange: (val: number | null) => void;
}

const ExperimentPartOne = (props: ExperimentPartOneProps) => {
  const {
    randomWords,
    handleWordChange,
    handleNext,
    likertValue,
    handleLikertChange,
  } = props;

  if (randomWords.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <ImageComponent src={clicksImage} altText="clicks" maxHeight="300px" />
      </Box>

      <StyledPaper elevation={0}>
        <LikertScale
          question="How is your reading speed?"
          required={true}
          scalePoints={4}
          labels={["Slow", "Somewhat slow", "Somewhat fast", "Fast"]}
          value={likertValue}
          setValue={handleLikertChange}
        />
      </StyledPaper>

      <StyledPaper elevation={0}>
        <p>Click on each word to replace it with a new random word.</p>
        <ButtonsContainer>
          {randomWords.map((word, index) => (
            <ButtonComponent
              key={index}
              label={word}
              color="secondary"
              onClickHandler={() => handleWordChange(index)}
            />
          ))}
        </ButtonsContainer>
      </StyledPaper>

      <NextButtonContainer>
        <ButtonComponent
          label="Next Step"
          onClickHandler={handleNext}
          color="primary"
          disabled={likertValue === null}
        />
      </NextButtonContainer>
    </>
  );
};

export default ExperimentPartOne;
