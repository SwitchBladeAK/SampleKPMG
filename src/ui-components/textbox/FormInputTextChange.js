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

const FormInput = ({
  id,
  info,
  value,
  defaultValue,
  name,
  required,
  pattern,
  label,
  params,
  disable,
  onChange,
  onBlur,
  margin,
  placeholder,
  handleKeyPress,
  helperText,
}) => {
  const textVariant = "standard";
  const disabledText = disable === true ? true : false;
  const fcMargin = margin !== undefined && margin !== null ? margin : 1;
  const tooltipTitle =
    value !== null && value !== undefined && value !== ""
      ? value
      : defaultValue !== null &&
        defaultValue !== undefined &&
        defaultValue !== ""
      ? defaultValue
      : info !== null && info !== undefined
      ? getLabelName(info)
      : "";
  console.log(value);
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
            value={value && value}
            disabled={disabledText}
            onChange={onChange && onChange}
            placeholder={placeholder && placeholder}
            inputProps={{
              pattern: pattern,
            }}
            required={required}
            onBlur={onBlur && onBlur}
            onKeyPress={handleKeyPress}
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

export default FormInput;
