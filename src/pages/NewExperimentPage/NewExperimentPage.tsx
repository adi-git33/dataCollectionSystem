import { useEffect, useState } from "react";
import { getRandomWord } from "../../api/randomWord.api";
import { FormContainer } from "./NewExperimentPage.styled";

import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import StepperComponent from "../../components/StepperComponent/StepperComponent";
import ExperimentPartOne from "./ExperimentPartOne/ExperimentPartOne";
import ExperimentPartTwo from "./ExperimentPartTwo/ExperimentPartTwo";

const NewExperimentPage = () => {
  const steps = ["Part 1", "Part 2"];
  const [activeStep, setActiveStep] = useState(0);
  const [randomWords, setRandomWords] = useState<string[]>([]);

  useEffect(() => {
    const fetchInitialWords = async () => {
      try {
        const promises = Array(3)
          .fill(null)
          .map(() => getRandomWord());
        const words = await Promise.all(promises);
        setRandomWords(words);
      } catch (error) {
        console.error("Error fetching initial words:", error);
      }
    };

    fetchInitialWords();
  }, []);

  const handleWordChange = async (index: number) => {
    try {
      const newWord = await getRandomWord();

      setRandomWords((prevWords) => {
        const updatedWords = [...prevWords];
        updatedWords[index] = newWord;
        return updatedWords;
      });
    } catch (error) {
      console.error("Error updating word:", error);
    }
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    // Submission logic here
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Header />
      <MainWrapper align="center">
        <FormContainer>
        <StepperComponent steps={steps} activeStep={activeStep} />
          {activeStep === 0 ? (
            <ExperimentPartOne
              randomWords={randomWords}
              handleWordChange={handleWordChange}
              handleNext={handleNext}
            />
          ) : (
            <ExperimentPartTwo handleSubmit={handleSubmit} />
          )}
        </FormContainer>
      </MainWrapper>
    </div>
  );
};
export default NewExperimentPage;
