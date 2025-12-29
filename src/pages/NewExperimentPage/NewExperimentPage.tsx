import { useEffect, useState } from "react";
import { getRandomWord } from "../../api/randomWord.api";
import { FormContainer } from "./NewExperimentPage.styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../consts/routes";

import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import StepperComponent from "../../components/StepperComponent/StepperComponent";
import ExperimentPartOne from "./ExperimentPartOne/ExperimentPartOne";
import ExperimentPartTwo from "./ExperimentPartTwo/ExperimentPartTwo";
import DialogComponent from "../../components/DialogComponent/DialogComponent";
import { useActiveSessionStore } from "../../store/useActiveSessionStore";
import { useHistoryStore } from "../../store/useHistoryStore";

const NewExperimentPage = () => {
  const steps = ["Part 1", "Part 2"];
  const [activeStep, setActiveStep] = useState(0);
  const [randomWords, setRandomWords] = useState<string[]>([]);
  const [likertValue, setLikertValue] = useState<number | null>(null);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const navigate = useNavigate();

  const {
    startNewExperiment,
    recordPage1FirstClick,
    addPage1Click,
    recordPage2FirstClick,
    addBucketClick,
    finalizePage2,
    clearSession,
  } = useActiveSessionStore();

  const { saveSession } = useHistoryStore();

  useEffect(() => {
    startNewExperiment();
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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExitModalOpen(true);
  };

  const handleConfirmExit = () => {
    setIsExitModalOpen(false);
    clearSession();
    navigate(ROUTES.HOME);
  };

  const handleCancelExit = () => {
    setIsExitModalOpen(false);
  };

  const handleLikertChange = (val: number | null) => {
    setLikertValue(val);
    if (val !== null) {
      recordPage1FirstClick();
      addPage1Click({
        timestamp: new Date().toISOString(),
        value: val,
        buttonType: "likert",
      });
    }
  };

  const handleWordChange = async (index: number) => {
    recordPage1FirstClick();
    addPage1Click({
      timestamp: new Date().toISOString(),
      value: randomWords[index],
      buttonType: "word",
    });

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
    addPage1Click({
      timestamp: new Date().toISOString(),
      value: "next",
      buttonType: "submit",
    });
  };

  const handleBucketClick = () => {
    recordPage2FirstClick();
    addBucketClick();
  };

  const handleSubmit = () => {
    finalizePage2();
    const session = useActiveSessionStore.getState().currentSession;
    if (session) {
      saveSession(session);
      handleReset();
      console.log("Experiment saved!");
      console.log(session);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setLikertValue(null);
  };

  const handleGlobalClick = () => {
    if (activeStep === 0) {
      recordPage1FirstClick();
    } else if (activeStep === 1) {
      recordPage2FirstClick();
    }
  };

  return (
    <div onClick={handleGlobalClick} style={{ minHeight: "100vh" }}>
      <Header onLogoClick={handleLogoClick} />
      <MainWrapper align="center">
        <FormContainer>
          <StepperComponent steps={steps} activeStep={activeStep} />
          {activeStep === 0 ? (
            <ExperimentPartOne
              randomWords={randomWords}
              handleWordChange={handleWordChange}
              handleNext={handleNext}
              likertValue={likertValue}
              handleLikertChange={handleLikertChange}
            />
          ) : (
            <ExperimentPartTwo
              handleSubmit={handleSubmit}
              handleBucketClick={handleBucketClick}
            />
          )}
        </FormContainer>
      </MainWrapper>
      <DialogComponent
        isOpen={isExitModalOpen}
        title="Are you sure you want to exit?"
        description="The information won't be saved."
        onCancel={handleCancelExit}
        onConfirm={handleConfirmExit}
      />
    </div>
  );
};
export default NewExperimentPage;
