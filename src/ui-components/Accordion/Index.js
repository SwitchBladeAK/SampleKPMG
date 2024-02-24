import Accordion from "react-bootstrap/Accordion";

const CustomAccordion = (props) => {
  return (
    <Accordion>
      <Accordion.Item eventKey={props.eventKey}>
        {props.header !== undefined ? (
          <Accordion.Header>{props.header}</Accordion.Header>
        ) : (
          ""
        )}
        <Accordion.Body>{props.accordionBody}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default CustomAccordion;
