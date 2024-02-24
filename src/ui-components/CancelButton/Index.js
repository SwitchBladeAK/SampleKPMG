import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import PopupModal from "../modal";
import { useState } from "react";

const CancelButton = (props) => {
  let navigate = useNavigate();
  const [showCancel, setShowCancel] = useState(false);
  const handleCancelClick = () => {
    setShowCancel(true);
  };
  const handleClosePopup = () => {
    setShowCancel(false);
  };
  return (
    <>
      <PopupModal
        show={showCancel}
        handleClose={() => handleClosePopup()}
        modalTitle={"Confirm"}
        modalBody={"Are you sure you want to cancel?"}
        onclick={(evnt) => {
          setShowCancel(false);
          props.onSaveCancel !== undefined &&
          props.onSaveCancel !== null &&
          props.onSaveCancel !== ""
            ? props.onSaveCancel()
            : navigate(props.backURL);
        }}
        buttonName={"Yes"}
        modalSize={"lg"}
        hideFooter={false}
      ></PopupModal>
      <Button
        type="button"
        text="Cancel"
        name="cancel"
        onClick={handleCancelClick}
        buttonIcon="material-symbols:cancel"
      ></Button>
    </>
  );
};

export default CancelButton;
