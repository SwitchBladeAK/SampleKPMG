import { Button, Modal } from "react-bootstrap";
import React, { Component } from "react";
import Draggable from "react-draggable";
import ModalDialog from "react-bootstrap/ModalDialog";
import getLabelName from "../SharedFunction";
import "../UIComponent.css"
class DraggableModalDialog extends React.Component {
  render() {
    return (
      <Draggable handle=".modal-header">
        <ModalDialog {...this.props} />
      </Draggable>
    );
  }
}

const PopupModal = (props) => {
  console.log("modal popup");
  const modalFooter = props.hideFooter === true ? false : true;
  const modalSize = props.modalSize !== "lg" ? "" : props.modalSize;
  const label = getLabelName(props.modalTitle);
  return (
    <>
      <Modal
        dialogAs={DraggableModalDialog}
        show={props.show}
        onHide={props.handleClose}
        fullscreen={"sm-down"}
        // aria-labelledby="contained-modal-title-vcenter"
        centered
        size={modalSize}
      >
        <Modal.Header closeButton>
          <Modal.Title>{label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modalBody}</Modal.Body>
  {modalFooter && <Modal.Footer>
          {props.buttonName !== "" && <Button variant="primary" onClick={props.onclick} disabled ={props.disabledButton }>
            {props.buttonName}
          </Button> }

          {props.secondButtonName !== "" && props.secondButtonName !== undefined && <Button variant="primary" onClick={props.onSecondButtonClick} disabled ={props.disabledButton }>
            {props.secondButtonName}
          </Button> }
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>}



      </Modal>
    </>
  );
};
export default PopupModal;
