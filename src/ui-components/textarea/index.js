import { useContext, useState } from "react";
import { FormControl, FormHelperText, TextField } from "@mui/material";
import DataContext from "../../context/DataContext";
import { useForm, useFormContext } from "react-hook-form";
import FormTooltip from "../Tooltip";
import getLabelName from "../SharedFunction";

const FormInputArea = ({
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
}) => {
  // console.log("req is ", required);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const textVariant = "standard";
  const disabledText = disable === true ? true : false;
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
  const labelVal = getLabelName(label);
  return (
    <FormTooltip
      title={tooltipTitle}
      data={
        required ? (
          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <InputLabel htmlFor={name}>{name}</InputLabel> */}
            <TextField
              {...params}
              id={id}
              name={name}
              label={labelVal}
              variant={textVariant}
              aria-describedby={`${name}-text`}
              defaultValue={value && value}
              value={defaultValue && defaultValue}
              disabled={disabledText}
              onChange={onChange && onChange}
              multiline
              maxRows={4}
              {...register(name, {
                required: `${labelVal.replace("*", "")} is required.`,
                pattern: {
                  value: pattern ? pattern : /^.*$/,
                  message: `Invalid ${name}`,
                },
              })}
            />
            <FormHelperText style={{ color: "red" }}>
              {errors && errors[name] && errors[name].message}
            </FormHelperText>
          </FormControl>
        ) : (
          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <InputLabel htmlFor={name}>{name}</InputLabel> */}
            <TextField
              id={id}
              {...params}
              name={name}
              aria-describedby={`${name}-text`}
              label={labelVal}
              variant={textVariant}
              defaultValue={value}
              disabled={disabledText}
              onChange={onChange && onChange}
              multiline
              maxRows={4}
              // {...register(name)}
            />
          </FormControl>
        )
      }
    ></FormTooltip>
  );
};

export default FormInputArea;
