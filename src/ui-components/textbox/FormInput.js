import { useContext, useState } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import DataContext from "../../context/DataContext";
import { useForm, useFormContext } from "react-hook-form";
import FormTooltip from "../Tooltip";
import getLabelName from "../SharedFunction";
import Iconify from "../Iconify";

const FormInput = ({
  id,
  info,
  value,
  name,
  required,
  pattern,
  label,
  params,
  disable,
  isPassword,
  onIconClick,
  isIconRequired,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const textVariant = "standard";
  const disabledText = disable === true ? true : false;
  const is_required = required !== undefined ? required : false;
  const tooltipTitle =
    value !== null && value !== undefined && value !== ""
      ? value
      : info !== null && info !== undefined
      ? getLabelName(info)
      : "";
  const fieldType = isPassword ? "password" : "text";
  const labelVal = getLabelName(label);
  return (
    <FormTooltip
      title={tooltipTitle}
      data={
        is_required ? (
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              {...params}
              id={id}
              name={name}
              label={labelVal}
              type={fieldType}
              variant={textVariant}
              aria-describedby={`${name}-text`}
              defaultValue={value && value}
              disabled={disabledText}
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
            <TextField
              id={id}
              {...params}
              name={name}
              type={fieldType}
              aria-describedby={`${name}-text`}
              label={labelVal}
              variant={textVariant}
              defaultValue={value && value}
              disabled={disabledText}
              // InputProps={{
              //   endAdornment: isIconRequired ? (
              //     <InputAdornment position="end">
              //       <IconButton edge="end" onClick={onIconClick}>
              //         <Iconify icon="mdi:eye" />
              //       </IconButton>
              //     </InputAdornment>
              //   ) : (
              //     ""
              //   ),
              // }}
            />
          </FormControl>
        )
      }
    ></FormTooltip>
  );
};

export default FormInput;
