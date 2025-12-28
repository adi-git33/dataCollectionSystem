import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import LikertScale from "../../../components/LikertScale/LikertScale";
import clicksImage from "@assets/clicks.png";
import {
  ButtonsContainer,
  NextButtonContainer,
} from "../NewExperimentPage.styled";

interface ExperimentPartOneProps {
  randomWords: string[];
  handleWordChange: (index: number) => void;
  handleNext: () => void;
}

const ExperimentPartOne = (props: ExperimentPartOneProps) => {
  const { randomWords, handleWordChange, handleNext } = props;

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
      <ImageComponent src={clicksImage} altText="clicks" maxHeight="400px" />
      <div>
        <LikertScale
          question="How is your reading speed?"
          scalePoints={4}
          labels={["Slow", "Somewhat slow", "Somewhat fast", "Fast"]}
          value={null}
          setValue={() => {}}
        />
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
      <NextButtonContainer>
        <ButtonComponent
          label="Next"
          onClickHandler={handleNext}
          color="primary"
        />
      </NextButtonContainer>
    </>
  );
};

export default ExperimentPartOne;
