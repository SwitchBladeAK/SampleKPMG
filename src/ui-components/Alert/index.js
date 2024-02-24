import { Alert } from "react-bootstrap";
import getLabelName from "../SharedFunction";

const IndexAlert = (props) => {
  const id = props.id === undefined ? "alert" : props.id;
  const msg = Array.isArray(props.Message)
    ? props.Message.map((head) => getLabelName(head))
    : getLabelName(props.Message);

  return (
    <>
      <Alert id={id} variant={props.variant} show={props.show}>
        {msg}
      </Alert>
    </>
  );
};
export default IndexAlert;
