import { PortableWifiOffSharp } from "@mui/icons-material";
import {
  Autocomplete,
  FormControl,
  FormHelperText,
  Popper,
} from "@mui/material";
import FormInput from "../textbox/FormInput";
import { PopperMy } from "./AutocompletePopper";
import FormTooltip from "../Tooltip";
import { ObjectSchema } from "yup";
import getLabelName from "../SharedFunction";

const FormAutoComplete = (props) => {
  const variant = "standard";
  const tooltipTitle =
    props.value !== null &&
    props.value !== undefined &&
    props.value !== "" &&
    Object.keys(props.value).length > 0
      ? props.value.displayName
      : props.info;
  const label = getLabelName(props.label);
  return (
    <>
      <FormControl fullWidth>
        <Autocomplete
          id={props.id}
          fullWidth={true}
          label={label}
          PopperComponent={props.fitContent === true ? PopperMy : ""}
          //componentsProps={{ popper: { style: {  } } }}
          value={props.value && props.value}
          onChange={props.onChange}
          clearOnEscape
          options={props.options}
          variant={variant}
          required={props.required}
          disabled={props.disabled}
          placeholder={props.placeholder && props.placeholder}
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
          renderInput={(params) => (
            <FormInput
              params={params}
              name={props.textname}
              id={props.id}
              label={props.label}
              helpText={`${props.textname}-text`}
              info={tooltipTitle}
              placeholder={props.placeholder && props.placeholder}
              required={
                props.textrequired &&
                (props.value === "" ||
                  JSON.stringify({}) === JSON.stringify(props.value) ||
                  props.value === null ||
                  props.value === undefined)
              }
              disable={props.disabled}
            />
          )}
        />
        <FormHelperText
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {props.helperText}
        </FormHelperText>
      </FormControl>
    </>
  );
};
export default FormAutoComplete;
