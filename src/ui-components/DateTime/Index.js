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

const FormDateTime = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const disabledText = props.disable === true ? true : false;
  const is_required = props.required !== undefined ? props.required : false;
  const fcMargin =
    props.margin !== undefined && props.margin !== null ? props.margin : 1;
  const tooltipTitle =
    props.value !== null && props.value !== undefined && props.value !== ""
      ? props.value
      : props.defaultValue !== null &&
        props.defaultValue !== undefined &&
        props.defaultValue !== ""
      ? props.defaultValue
      : props.info !== null && props.info !== undefined
      ? getLabelName(props.info)
      : "";
  return (
    <FormTooltip
      title={tooltipTitle}
      data={
        is_required ? (
          <FormControl fullWidth sx={{ m: fcMargin }}>
            {/* <InputLabel htmlFor={name}>{name}</InputLabel> */}
            <input
              type="datetime-local"
              id={props.id}
              name={props.name}
              value={props.value}
              disabled={props.disabled && props.disabled}
              defaultValue={props.defaultValue && props.defaultValue}
              readOnly={disabledText}
              className="form-control"
              {...register(props.name, {
                required: `${props.label.replace("*", "")} is required.`,
                max: props.maxDate && props.maxDate,
                min: props.minDate && props.minDate,
                onChange: props.onChange && props.onChange,
              })}
            />
            <FormHelperText style={{ color: "red" }}>
              {errors && errors[props.name] && errors[props.name].message}
            </FormHelperText>
          </FormControl>
        ) : (
          <FormControl fullWidth sx={{ m: fcMargin }}>
            <input
              type="datetime-local"
              id={props.id}
              name={props.name}
              value={props.value}
              readOnly={disabledText}
              className="form-control"
              onChange={props.onChange && props.onChange}
              max={props.maxDate && props.maxDate}
              min={props.minDate && props.minDate}
              disabled={props.disabled && props.disabled}
              defaultValue={props.defaultValue && props.defaultValue}
            />
          </FormControl>
        )
      }
    ></FormTooltip>
  );
};

export default FormDateTime;
