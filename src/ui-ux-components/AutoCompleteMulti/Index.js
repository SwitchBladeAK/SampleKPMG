import { Autocomplete, Chip, TextField } from "@mui/material";

export default function CustomAutoCompleteMulti(props) {
  return (
    <Autocomplete
      multiple
      id={props.id}
      limitTags={1}
      disablePortal
      options={props.options}
      freeSolo={props.freeSolo}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={option.label}
            {...getTagProps({ index })}
          />
        ))
      }
      value={props.value && props.value}
      onChange={props.onChange}
      forcePopupIcon
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label && props.label}
          size="small"
          placeholder={props.placeholder}
        />
      )}
    />
  );
}
