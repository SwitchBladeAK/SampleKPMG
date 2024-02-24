import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import getLabelName from "../SharedFunction";

const FormUploadFile = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const label = getLabelName(props.label);
  return (
    <>
      <FormControl>
        <label>{label}</label>
        <input
          type="file"
          id={props.id}
          className="form-control"
          name={props.name}
          disabled={props.disabled}
          {...register(props.name, {
           // required: `${label.replace("*", "")} is required.`,
            onChange: props.onChange,
          })}
        />
        <FormHelperText style={{ color: "red" }}>
          {errors && errors[props.name] && errors[props.name].message}
        </FormHelperText>
      </FormControl>
    </>
  );
};
export default FormUploadFile;
