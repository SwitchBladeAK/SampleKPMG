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

const FormInputNumeric = ({
  id,
  info,
  value,
  name,
  required,
  pattern,
  label,
  params,
  disable,
  onChange,
  min,
  max,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const textVariant = "standard";
  const disabledText = disable === true ? true : false;
  //const changeEvent = onChange !== undefined && onChange != null ? onChange : "";
  const is_required = required !== undefined ? required : false;
  const tooltipTitle =
    value !== null && value !== undefined && value !== ""
      ? value
      : info !== null && info !== undefined
      ? getLabelName(info)
      : "";
  const labelVal = getLabelName(label);
  return (
    <FormTooltip
      title={tooltipTitle}
      data={
        is_required ? (
          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <InputLabel htmlFor={name}>{name}</InputLabel> */}
            <TextField
              {...params}
              id={id}
              name={name}
              label={labelVal}
              variant={textVariant}
              aria-describedby={`${name}-text`}
              defaultValue={value}
              disabled={disabledText}
              //onChange={onChange && onChange}
              type="number"
              inputProps={{
                inputMode: "numeric",
                min: min && min,
                max: max && max,
                pattern: "/^-?d+(?:.d+)?$/g",
              }}
              {...register(name, {
                required: `${labelVal.replace("*", "")} is required.`,
                onChange: onChange && onChange,
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
              type="number"
              inputProps={{
                inputMode: "numeric",
                min: min && min,
                max: max && max,
                pattern: "/^-?d+(?:.d+)?$/g",
              }}
            />
          </FormControl>
        )
      }
    ></FormTooltip>
  );
};

export default FormInputNumeric;
