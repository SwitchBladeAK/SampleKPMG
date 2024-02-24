import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import getLabelName from "../SharedFunction";

const FormRadioButtonGroup = (props) => {
  console.log("Inside", props.value);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const controlLabel = getLabelName(props.controlLabel);
  return (
    <>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          {controlLabel}
        </FormLabel>
        <RadioGroup
          row={props.row && props.row}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name={props.name}
          disabled={props.disabled && props.disabled}
          value={props.value && props.value}
          //onChange={props.onChange && props.onChange}
          {...register(props.name, {
            required:
              props.value === ""
                ? `${controlLabel.replace("*", "")} is required.`
                : "",
            onChange: props.Change && props.Change,
          })}
        >
          {props.options &&
            props.options.map((rec, index) => (
              <FormControlLabel
                key={index}
                value={rec.optionValue}
                control={<Radio />}
                label={getLabelName(rec.optionLabel)}
                disabled={props.disabled}
                id={rec.optionId}
              />
            ))}
        </RadioGroup>
        <FormHelperText style={{ color: "red" }}>
          {errors && errors[props.name] && errors[props.name].message}
        </FormHelperText>
      </FormControl>
    </>
  );
};
export default FormRadioButtonGroup;
