import { TimePicker } from "@mui/x-date-pickers";
import getLabelName from "../../ui-components/SharedFunction";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../../customCssFile/cssMaster.css";

const CustomTime = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        value={props.value && props.value}
        onChange={props.onChange && props.onChange}
        defaultValue={props.defaultValue && props.defaultValue}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: "100%" }}
            size="small"
            id={props.id}
            label={props.label && getLabelName(props.label)}
            name={props.name}
            readOnly={props.disabled === true ? true : false}
            error={false}
          />
        )}
      />
    </LocalizationProvider>
  );
};
export default CustomTime;
