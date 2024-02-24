import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import "../../customCssFile/cssMaster.css";
import getLabelName from "../../ui-components/SharedFunction";
import FormTooltip from "../../ui-components/Tooltip";

export default function CustomTextField(props) {
  const tooltipTitle =
    props.value !== null && props.value !== undefined && props.value !== ""
      ? props.value
      : props.defaultValue !== null &&
        props.defaultValue !== undefined &&
        props.defaultValue !== ""
      ? props.defaultValue
      : props.info !== null && props.info !== undefined
      ? props.info
      : "";
  return (
    <FormTooltip
      title={tooltipTitle}
      data={
        <TextField
          size="small"
          id={props.id}
          // style={{ margin: 0 }}
          sx={{ width: "100%" }}
          name={props.name}
          label={props.label && getLabelName(props.label)}
          value={props.value}
          defaultValue={props.defaultValue && props.defaultValue}
          onChange={props.onChange}
          placeholder={props.placeholder}
          disabled={props.disabled}
          required={
            props.required !== null && props.required !== undefined
              ? props.required
              : false
          }
          helperText={props.helperText}
          // className="custom-inputbox small"
          // focused
        />
      }
    />
  );
}

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#545454",
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: "solid 1px #545454",
    },
  },
});
