import { Card } from "react-bootstrap";
const CustomCard = (props) => {
  const text =
    props.text !== undefined && props.text !== null ? props.text : "dark";
  return (
    <Card id={props.id} text={props.text} style ={{padding :"1px"}}  >
      <Card.Header style={{  padding: "5px"}}>
       {props.header}
      </Card.Header>
      
      <Card.Body style={{ padding: "5px" }}>{props.body}</Card.Body>
    </Card>
  );
};
export default CustomCard;
