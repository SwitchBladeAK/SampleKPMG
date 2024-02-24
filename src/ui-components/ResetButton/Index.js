import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import PopupModal from "../modal";
import { useState } from "react";

const ResetButton = (props) => {
  const [showReset, setShowReset] = useState(false);
  const handleResetClick = () => {
    setShowReset(true);
  };
  const handleClosePopup = () => {
    setShowReset(false);
  };
  return (
    <>
      <PopupModal
        show={showReset}
        handleClose={() => handleClosePopup()}
        modalTitle={"Confirm"}
        modalBody={"Are you sure you want to reset the current action?"}
        onclick={(evnt) => {
          setShowReset(false);
          props.ResetClick();
        }}
        buttonName={"Yes"}
        modalSize={"lg"}
        hideFooter={false}
      ></PopupModal>
      <Button
        buttonIcon="material-symbols:device-reset"
        type="button"
        text="Reset"
        name="reset"
        onClick={handleResetClick}
      ></Button>
    </>
  );
};

export default ResetButton;
