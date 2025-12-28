import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import clicksImage from "@assets/clicks.png";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import { ButtonsContainer } from "../NewExperimentPage.styled";

interface ExperimentPartOneProps {
    randomWords: string[];
    handleWordChange: (index: number) => void;
    handleNext: () => void;
}


const ExperimentPartOne = (props: ExperimentPartOneProps) => {
  const { randomWords, handleWordChange, handleNext } = props;

  return (
    <>
      <ImageComponent src={clicksImage} altText="clicks" maxHeight="400px" />
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
      <div>
        <ButtonComponent
          label="Next"
          onClickHandler={handleNext}
          color="primary"
        />
      </div>
    </>
  );
};

export default ExperimentPartOne;