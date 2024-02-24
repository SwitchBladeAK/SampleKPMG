import { useContext, useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import DataContext from "../../context/DataContext";
import { useForm, useFormContext } from "react-hook-form";
import FormTooltip from "../Tooltip";
import getLabelName from "../SharedFunction";

const FormInputNumericChange = ({
  id,
  info,
  value,
  name,
  step1,
  required,
  pattern,
  label,
  params,
  disable,
  onChange,
  onBlur,
  margin,
  placeholder,
  val,
  min,
  helperText,
  step
}) => {
  const textVariant = "standard";
  const disabledText = disable === true ? true : false;
  const defaultValue = value;
  const valueParam = val;
  //   const is_required = required !== undefined ? required : false;
  const fcMargin = margin !== undefined && margin !== null ? margin : 1;
   step1 = step?"1":"0.000001";
  console.log(value);
  console.log("Step..", step1);
  const tooltipTitle =
    value !== null && value !== undefined && value !== ""
      ? value
      : val !== null && val !== undefined && val !== ""
      ? val
      : info !== null && info !== undefined
      ? getLabelName(info)
      : "";
  const labelVal = getLabelName(label);
  return (
    <FormTooltip
      title={tooltipTitle}
      data={
        <FormControl fullWidth sx={{ m: fcMargin }}>
          <TextField
            id={id}
            {...params}
            name={name}
            aria-describedby={`${name}-text`}
            label={labelVal}
            variant={textVariant}
            defaultValue={defaultValue && defaultValue}
            value={valueParam && valueParam}
            disabled={disabledText}
            type="number"
            inputProps={{
              inputMode: "numeric",
              pattern: "/^-?d+(?:.d+)?$/g",
              step: step1,
              min: min && min,
            }}
            onChange={onChange && onChange}
            required={required}
            // error={value === undefined || value === "" ? true : false}
            onBlur={onBlur && onBlur}
            placeholder={placeholder && placeholder}
          />
          <FormHelperText
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {helperText}
          </FormHelperText>
        </FormControl>
      }
    />
  );
};

export default FormInputNumericChange;
