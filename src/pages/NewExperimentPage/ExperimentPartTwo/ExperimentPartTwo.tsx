import { useState } from "react";
// Styled & Components
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import CounterButton from "../../../components/CounterButton/CounterButton";

interface ExperimentPartTwoProps {
  handleSubmit: () => void;
  handleBucketClick: () => void;
}

const ExperimentPartTwo = (props: ExperimentPartTwoProps) => {
  const { handleSubmit, handleBucketClick } = props;
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const onMaxReached = () => {
    setTimeout(() => {
      setShowSubmitButton(true);
    }, 300);
  };

  return (
    <>
      <p>
        Click the button repeatedly until the progress bar is full.
      </p>
      <CounterButton
        onMaxReached={onMaxReached}
        onClick={handleBucketClick}
        disabled={showSubmitButton}
      />
      {showSubmitButton && (
        <div>
          <ButtonComponent
            label="Submit"
            onClickHandler={handleSubmit}
            color="primary"
          />
        </div>
      )}
    </>
  );
};

export default ExperimentPartTwo;
