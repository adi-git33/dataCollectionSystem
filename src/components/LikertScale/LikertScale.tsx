import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const LikertScale = ({
  question,
  scalePoints,
  labels,
  value,
  setValue,
}: {
  question: string;
  scalePoints: number;
  labels: string[];
  value: number | null;
  setValue: (value: number | null) => void;
}) => {
  return (
    <>
      <p>{question}</p>
      <RadioGroup
        row
        aria-labelledby="likert-scale-group"
        name="likert-scale-group"
        value={value !== null ? value.toString() : ""}
        onChange={(e) => setValue(parseInt(e.target.value))}
      >
        {[...Array(scalePoints)].map((_, index) => {
          const option = index + 1;
          return (
            <FormControlLabel
              key={option}
              value={option.toString()}
              control={<Radio checked={value === option} color="secondary" />}
              label={labels[index]}
              labelPlacement="bottom"
            />
          );
        })}
      </RadioGroup>
    </>
  );
};
export default LikertScale;
