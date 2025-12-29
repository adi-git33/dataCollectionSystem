import { useState } from "react";
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
      <CounterButton
        onMaxReached={onMaxReached}
        onClick={handleBucketClick}
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
