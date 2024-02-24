import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import CustomProgressBar from "../ProgressBar/Index";
import Popover from "react-bootstrap/Popover";
const CustomOverlayTrigger = (props) => {
  return (
    <OverlayTrigger
      trigger={props.trigger}
      placement={props.placement}
      rootClose={false}
      overlay={
        <Popover id="popover-basic" 
         
        >
          <Popover.Header as="h3">{props.popoverHeader}</Popover.Header>
          <Popover.Body>{props.popoverBody}</Popover.Body>
        </Popover>
      }
    >
      <div id={props.id}>{props.overlayBody}</div>
    </OverlayTrigger>
  );
};
export default CustomOverlayTrigger;
