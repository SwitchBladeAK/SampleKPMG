import { Autocomplete, TextField } from "@mui/material";

export default function CustomAutoComplete(props) {
  return (
    <Autocomplete
      disablePortal
      id={props.id}
      className={props.className}
      options={props.options}
      sx={{ width: "100%" }}
      value={props.value}
      onChange={props.onChange}
      label={props.label && props.label}
      renderInput={(params, option) => <TextField {...params} size="small" />}
    />
  );
}
