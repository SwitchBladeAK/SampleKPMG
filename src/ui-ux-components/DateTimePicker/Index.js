import { TextField } from "@mui/material";
import getLabelName from "../../ui-components/SharedFunction";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import "../../customCssFile/cssMaster.css";
import dayjs from "dayjs";

const CustomDateTimePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        maxDateTime={props.maxDate && dayjs(props.maxDate)}
        minDateTime={props.minDate && dayjs(props.minDate)}
        value={props.value}
        onChange={props.onChange && props.onChange}
        defaultValue={props.defaultValue && props.defaultValue}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            sx={{ width: "100%" }}
            id={props.id}
            name={props.name}
            label={props.label && getLabelName(props.label)}
            readOnly={props.disabled === true ? true : false}
            error={false}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDateTimePicker;
