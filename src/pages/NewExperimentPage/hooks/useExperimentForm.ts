import { useState, useEffect, useCallback } from "react";
// 
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../consts/routes";

// Logic
import { getRandomWord } from "../../../api/randomWord.api";
import { useActiveSessionStore } from "../../../store/useActiveSessionStore";
import { useHistoryStore } from "../../../store/useHistoryStore";


export const useExperimentForm = () => {
  const navigate = useNavigate();
  // State
  const [activeStep, setActiveStep] = useState(0);
  const [randomWords, setRandomWords] = useState<string[]>([]);
  const [likertValue, setLikertValue] = useState<number | null>(null);

  // Store Actions
  const {
    startNewExperiment,
    recordPage1FirstClick,
    addPage1Click,
    recordPage2FirstClick,
    addBucketClick,
    finalizePage2,
  } = useActiveSessionStore();
  
  const { saveSession } = useHistoryStore();

  // Initialization 
  useEffect(() => {
    const fetchInitialWords = async () => {
      try {
        const promises = Array(3).fill(null).map(() => getRandomWord());
        const words = await Promise.all(promises);
        setRandomWords(words);
      } catch (error) {
        console.error("Error fetching initial words:", error);
      }
    };

    startNewExperiment();
    fetchInitialWords();
  }, [startNewExperiment]);



  // Handlers
  const handleGlobalClick = useCallback(() => {
    if (activeStep === 0) recordPage1FirstClick();
    if (activeStep === 1) recordPage2FirstClick();
  }, [activeStep, recordPage1FirstClick, recordPage2FirstClick]);

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
      setRandomWords((prev) => {
        const updated = [...prev];
        updated[index] = newWord;
        return updated;
      });
    } catch (error) {
      console.error("Error updating word:", error);
    }
  };

  const handleNext = () => {
    addPage1Click({
      timestamp: new Date().toISOString(),
      value: "next",
      buttonType: "submit",
    });
    setActiveStep((prev) => prev + 1);
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
      console.log("Experiment session saved:", session);
      // Reset local state
      setActiveStep(0);
      navigate(ROUTES.RESULTS);
      setLikertValue(null);
    }
  };

  return {
    // State
    activeStep,
    randomWords,
    likertValue,
    // Methods
    handleGlobalClick,
    handleLikertChange,
    handleWordChange,
    handleNext,
    handleBucketClick,
    handleSubmit,
  };
};