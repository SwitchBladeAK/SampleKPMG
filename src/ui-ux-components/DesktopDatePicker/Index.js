import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import getLabelName from "../../ui-components/SharedFunction";
import dayjs from "dayjs";

const CustomDesktopDatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        inputFormat="MM/DD/YYYY"
        maxDate={props.maxDate && dayjs(props.maxDate)}
        minDate={props.minDate && dayjs(props.minDate)}
        value={props.value}
        onChange={props.onChange && props.onChange}
        defaultValue={props.defaultValue && props.defaultValue}
        renderInput={(params) => (
          <TextField
            {...params}
            id={props.id}
            sx={{ width: "100%" }}
            size="small"
            error={false}
            name={props.name}
            label={props.label && getLabelName(props.label)}
            readOnly={props.disabled === true ? true : false}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDesktopDatePicker;
