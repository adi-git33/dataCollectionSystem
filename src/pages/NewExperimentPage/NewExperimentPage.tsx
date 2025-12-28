import { useState } from "react";
import {getRandomWord } from "../api/randomWord.api";

import Header from "../../components/Header/Header";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import StepperComponent from "../../components/StepperComponent/StepperComponent";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import clicksImage from "@assets/clicks.png";


const NewExperimentPage = () => {
  const steps = ["Part 1", "Part 2"];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Header />
      <MainWrapper align="center">
        <StepperComponent steps={steps} activeStep={activeStep} />
        <ImageComponent src={clicksImage} altText="clicks" maxHeight="400px" />
      </MainWrapper>
    </div>
  );
};
export default NewExperimentPage;

