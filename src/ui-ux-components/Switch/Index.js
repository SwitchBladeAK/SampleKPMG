import { Switch } from "@mui/material";
export default function CustomSwitch(props) {
  return (
    <Switch onChange={props.onChange} id={props.id} checked={props.checked} />
  );
}
