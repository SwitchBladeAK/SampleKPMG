import { Link } from "@mui/material";
import getLabelName from "../SharedFunction";

const HyperLink = (props) => {
  const label = getLabelName(props.value);
  return (
    <Link component={props.component} onClick={props.onClick}>
      {label}
    </Link>
  );
};
export default HyperLink;
