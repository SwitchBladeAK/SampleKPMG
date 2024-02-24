import styled from "@emotion/styled";
import { Autocomplete, TextField } from "@mui/material";
import "../../customCssFile/cssMaster.css";
import getLabelName from "../../ui-components/SharedFunction";
import { PopperMy } from "../../ui-components/AutoComplete/AutocompletePopper";
import FormTooltip from "../../ui-components/Tooltip";

export default function CustomAutoComplete(props) {
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
      className={
        props.className !== null && props.className !== undefined
          ? props.className
          : "custom-autocomplete small"
      }
      // PopperComponent={props.fitContent === true ? PopperMy : ""}
      options={props.options}
      sx={{ width: "100%" }}
      value={props.value && props.value}
      onChange={props.onChange}
      label={props.label && getLabelName(props.label)}
      required={props.required}
      disabled={props.disabled}
      groupBy={props.groupBy && props.groupBy}
      getOptionLabel={(option) =>
        option.displayName ? option.displayName : ""
      }
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderOption={(props, option) => {
        return (
          <FormTooltip
            title={option.displayName}
            data={
              <li {...props} key={option.id}>
                {option.displayName}
              </li>
            }
          ></FormTooltip>
        );
      }}
      renderInput={
        (params, option) => (
          <FormTooltip
            title={tooltipTitle}
            data={
              <StyledTextField
                {...params}
                size="small"
                name={props.textname}
                label={
                  <div className={props.labelclass && props.labelclass}>
                    {props.label && getLabelName(props.label)}
                  </div>
                }
                placeholder={props.placeholder && props.placeholder}
                // focused
                helperText={props.helperText && props.helperText}
                required={
                  props.textrequired &&
                  (props.value === "" ||
                    JSON.stringify({}) === JSON.stringify(props.value) ||
                    props.value === null ||
                    props.value === undefined)
                }
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
