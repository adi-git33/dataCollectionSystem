// Styled & Components
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import LikertScale from "../../../components/LikertScale/LikertScale";
import {
  ButtonsContainer,
  NextButtonContainer,
} from "../NewExperimentPage.styled";

// Images
import clicksImage from "../../../assets/clicks.png";

interface ExperimentPartOneProps {
  randomWords: string[];
  handleWordChange: (index: number) => void;
  handleNext: () => void;
  likertValue: number | null;
  handleLikertChange: (val: number | null) => void;
  allWordsClicked: boolean;
}

const ExperimentPartOne = (props: ExperimentPartOneProps) => {
  const {
    randomWords,
    handleWordChange,
    handleNext,
    likertValue,
    handleLikertChange,
    allWordsClicked,
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
      <ImageComponent src={clicksImage} altText="clicks" maxHeight="300px" />
      <div>
        <div>
          <LikertScale
            question="How is your reading speed?"
            scalePoints={4}
            labels={["Slow", "Somewhat slow", "Somewhat fast", "Fast"]}
            value={likertValue}
            setValue={handleLikertChange}
          />
        </div>
      </div>
      <div>
        <div>
          <p>Click on each word to replace it with a new random word.</p>
          <p>Once you have clicked all the words, click "Next" to proceed.</p>
        </div>
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
      </div>
      <NextButtonContainer>
        <ButtonComponent
          label="Next"
          onClickHandler={handleNext}
          color="primary"
          disabled={likertValue === null || !allWordsClicked}
        />
      </NextButtonContainer>
    </>
  );
};

export default ExperimentPartOne;
