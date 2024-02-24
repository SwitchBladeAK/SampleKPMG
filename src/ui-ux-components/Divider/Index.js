import { Divider } from "@mui/material";

export default function CustomDivider(props) {
  return (
    <Divider
      className={props.className && props.className}
      style={{ backgroundColor: "#000000" }}
      sx={props.sx && props.sx}
    />
  );
}
