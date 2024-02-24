import { Tooltip } from "@mui/material";

const FormTooltip = (props) => {
  return (
    <>
      <Tooltip title={props.title} arrow placement="top">
        {props.data}
      </Tooltip>
    </>
  );
};
export default FormTooltip;
