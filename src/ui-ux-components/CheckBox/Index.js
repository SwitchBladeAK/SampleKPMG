import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import getLabelName from "../../ui-components/SharedFunction";
import "../../customCssFile/cssMaster.css";

const CustomCheckBox = (props) => {
  const inputprops =
    props.input !== undefined && props.input !== null
      ? props.input
      : { "aria-label": "controlled" };
  return (
    <FormGroup className="custom-checkbox small">
      <FormControlLabel
        control={
          <Checkbox
            id={props.id && props.id}
            disableRipple
            color="primary"
            onClick={props.onClick && props.onClick}
            defaultChecked={props.defaultCheck && props.defaultCheck}
            checked={props.checked}
            inputProps={inputprops}
            onChange={props.onChange && props.onChange}
            indeterminate={props.indeterminate && props.indeterminate}
            className="py-1"
          />
        }
        label={props.label && getLabelName(props.label)}
        disabled={props.disabled}
      />
    </FormGroup>
  );
};
export default CustomCheckBox;
