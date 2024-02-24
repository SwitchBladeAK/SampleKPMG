import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import getLabelName from "../SharedFunction";

const FormCheckBox = (props) => {
  const inputprops =
    props.inputProps !== undefined && props.inputProps !== null
      ? props.inputProps
      : { "aria-label": "controlled" };

  const label = getLabelName(props.label);
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              id={props.id && props.id}
              checked={props.checked}
              onChange={props.onChange && props.onChange}
              onClick={props.onClick && props.onClick}
              inputProps={inputprops}
              defaultChecked={props.defaultCheck && props.defaultCheck}
            />
          }
          label={label}
          id={props.ControlId && props.ControlId}
          disabled={props.disabled}
        />
      </FormGroup>
    </>
  );
};
export default FormCheckBox;
