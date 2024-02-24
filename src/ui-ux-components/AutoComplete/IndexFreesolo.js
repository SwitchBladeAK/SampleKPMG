import styled from "@emotion/styled";
import { Autocomplete, TextField } from "@mui/material";
import "../../customCssFile/cssMaster.css";
import getLabelName from "../../ui-components/SharedFunction";
import { PopperMy } from "../../ui-components/AutoComplete/AutocompletePopper";
import FormTooltip from "../../ui-components/Tooltip";

export default function CustomAutoCompleteFreeSolo(props) {
  const tooltipTitle =
    props.value !== null &&
    props.value !== undefined &&
    props.value !== "" &&
    Object.keys(props.value).length > 0
      ? props.value.displayName
      : props.info !== null && props.info !== undefined
      ? props.info
      : "";
  return (
    <Autocomplete
      // disablePortal
      id={props.id}
      freeSolo
      onBlur={props.onBlur}
      className={
        props.className !== null && props.className !== undefined
          ? props.className
          : "custom-autocomplete small"
      }
      // PopperComponent={props.fitContent === true ? PopperMy : ""}
      options={props.options.map((option) => option.displayName)}
      sx={{ width: "100%" }}
      value={
        props.value !== null &&
        props.value !== undefined &&
        Object.keys(props.value).length > 0
          ? props.value
          : ""
      }
      onChange={props.onChange}
      disabled={props.disabled}
      forcePopupIcon
      renderOption={(props, option) => {
        return (
          <FormTooltip
            title={option}
            data={
              <li
                {...props}
                key={"id" + option}
                style={{ alignContent: "start" }}
              >
                {option}
              </li>
            }
          ></FormTooltip>
        );
      }}
      renderInput={
        (params) => (
          <FormTooltip
            title={tooltipTitle}
            data={
              <TextField
                {...params}
                size="small"
                name={props.textname}
                label={props.label && getLabelName(props.label)}
                placeholder={props.placeholder && props.placeholder}
                // focused
                helperText={props.helperText && props.helperText}
                required={props.required}
              />
            }
          />
        )
        // <TextField {...params} size="small" />
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
