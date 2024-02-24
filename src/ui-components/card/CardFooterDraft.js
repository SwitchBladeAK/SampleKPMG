import { Card, Col, Row } from "react-bootstrap";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopupModal from "../modal";
import ResetButton from "../ResetButton/Index";
import CancelButton from "../CancelButton/Index";

const CardFooterDraft = (props) => {
  let navigate = useNavigate();
  // const [showCancel, setShowCancel] = useState(false);
  // const [showReset, setShowReset] = useState(false);
  const HandleCacelClick = () => {
    navigate(props.URL);
  };
  // const handleCancelClick = () => {
  //   setShowCancel(true);
  //   setShowReset(false);
  // };
  // const handleResetClick = () => {
  //   setShowCancel(false);
  //   setShowReset(true);
  // };
  // const saveClickPopup = (event) => {
  //   setShowCancel(false);
  //   setShowReset(false);
  //   if (showCancel) {
  //     console.log("Cancel");
  //     cancelOnclickevent();
  //   } else {
  //     console.log("Reset");
  //     props.ResetClick();
  //   }
  // };
  // const handleClosePopup = () => {
  //   setShowCancel(false);
  //   setShowReset(false);
  // };
  let cancelOnclickevent =
    props.CancelClick !== undefined &&
    props.CancelClick !== null &&
    props.CancelClick !== ""
      ? props.CancelClick
      : HandleCacelClick;
  let saveText =
    props.saveText !== undefined && props.saveText !== null
      ? props.saveText
      : "Submit";
  let saveButtonWidth =
    props.saveButtonWidth !== undefined && props.saveButtonWidth !== null
      ? props.saveButtonWidth
      : 2;
  let isReset =
    props.isReset !== undefined && props.isReset !== null
      ? props.isReset
      : true;
  let isDraft =
    props.isDraft !== undefined && props.isDraft !== null
      ? props.isDraft
      : false;
  return (
    <>
      {/* <PopupModal
        show={showCancel || showReset}
        handleClose={() => handleClosePopup()}
        modalTitle={"Confirm"}
        modalBody={
          showCancel
            ? "Are you sure you want to cancel?"
            : "Are you sure you want to reset the current action?"
        }
        onclick={(evnt) => saveClickPopup(evnt)}
        buttonName={"Yes"}
        modalSize={"lg"}
        hideFooter={false}
      ></PopupModal> */}
      <Card.Footer>
        <Row className="button-alignment">
          {props.disabled === false && isDraft === true && (
            <Col md={2} sx={{ m: 1 }}>
              <Button type="submit" name="draft" text={"Draft"}></Button>
            </Col>
          )}
          {props.disabled === false && (
            <Col md={saveButtonWidth} sx={{ m: 1 }}>
              <Button
                type="submit"
                name="save"
                text={saveText}
                buttonIcon="mdi:content-save"
              ></Button>
            </Col>
          )}
          {props.disabled === false && isReset === true && (
            <Col md={"auto"}>
              <ResetButton ResetClick={props.ResetClick} />

              {/* <Button
                // type="reset"
                type="button"
                text="Reset"
                onClick={handleResetClick}
              ></Button> */}
            </Col>
          )}
          {props.disabled === false && (
            <Col md={"auto"}>
              <CancelButton onSaveCancel={cancelOnclickevent} />

              {/* <Button
                type="button"
                text="Cancel"
                // onClick={cancelOnclickevent}
                onClick={handleCancelClick}
              ></Button> */}
            </Col>
          )}
        </Row>
      </Card.Footer>
    </>
  );
};
export default CardFooterDraft;
