import Chip from "@mui/material/Chip";

export default function ClickableChips(props) {
  return (
    <Chip
      label={props.label}
      variant="outlined"
      onClick={props.onClick}
      onDelete={props.onDelete && props.onDelete}
    />
  );
}
