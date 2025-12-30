import { useState } from "react"
// Router
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../consts/routes";
// Styled & Components
import { FormContainer } from "./NewExperimentPage.styled";
import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import StepperComponent from "../../components/StepperComponent/StepperComponent";
import ExperimentPartOne from "./ExperimentPartOne/ExperimentPartOne";
import ExperimentPartTwo from "./ExperimentPartTwo/ExperimentPartTwo";
import DialogComponent from "../../components/DialogComponent/DialogComponent";
// Logic
import { useExperimentForm } from "./hooks/useExperimentForm";
import { useActiveSessionStore } from "../../store/useActiveSessionStore";

const NewExperimentPage = () => {
  const navigate = useNavigate();
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const { clearSession } = useActiveSessionStore();

  // Custom hook containing all experiment logic
  const {
    activeStep,
    randomWords,
    likertValue,
    handleGlobalClick,
    handleLikertChange,
    handleWordChange,
    handleNext,
    handleBucketClick,
    handleSubmit,
  } = useExperimentForm();

  const steps = ["Part 1", "Part 2"];

  // --- Exit Logic ---
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLElement).blur();
    setIsExitModalOpen(true);
  };

  const handleConfirmExit = () => {
    setIsExitModalOpen(false);
    clearSession();
    navigate(ROUTES.HOME);
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
        onCancel={() => setIsExitModalOpen(false)}
        onConfirm={handleConfirmExit}
      />
    </div>
  );
};

export default NewExperimentPage;