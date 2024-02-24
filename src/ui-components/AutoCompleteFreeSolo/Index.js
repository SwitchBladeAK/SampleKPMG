import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { PopperMy } from "../AutoComplete/AutocompletePopper";
import FormInput from "../textbox/FormInput";
import FormTooltip from "../Tooltip";
import getLabelName from "../SharedFunction";

const FormAutoCompleteFreesolo = (props) => {
  console.log("change freesolo", props.value);
  const tooltipTitle =
    props.value !== null &&
    props.value !== undefined &&
    props.value !== "" &&
    Object.keys(props.value).length > 0
      ? props.value
      : getLabelName(props.info);
  const label = getLabelName(props.label);
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <Autocomplete
        id={props.id}
        label={label}
        freeSolo
        onBlur={props.onBlur}
        PopperComponent={props.fitContent === true ? PopperMy : ""}
        onChange={props.onChange}
        options={props.options.map((option) => option.displayName)}
        disabled={props.disabled}
        value={
          props.value !== null &&
          props.value !== undefined &&
          Object.keys(props.value).length > 0
            ? props.value
            : ""
        }
        forcePopupIcon
        renderOption={(props, option) => {
          return (
            <FormTooltip
              title={option}
              data={
                <li {...props} key={"id" + option}>
                  {option}
                </li>
              }
            ></FormTooltip>
          );
        }}
        renderInput={(params) => (
          <FormTooltip
            title={tooltipTitle}
            data={
              <TextField
                {...params}
                id={props.id}
                label={label}
                required={props.required}
                variant="standard"
                placeholder={props.placeholder && props.placeholder}
              />
            }
          />
          //   <FormInput
          //   params={params}
          //   name={props.textname}
          //   id={props.id}
          //   label={props.label}
          //   helpText={`${props.textname}-text`}
          //   info={props.info}
          // required={props.textrequired}
          //   placeholder = {props.placeholder && props.placeholder}
          //   disable={props.disabled}
          // />
        )}
      />
      <FormHelperText style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        {props.helperText}
      </FormHelperText>
    </FormControl>
  );
};
export default FormAutoCompleteFreesolo;
