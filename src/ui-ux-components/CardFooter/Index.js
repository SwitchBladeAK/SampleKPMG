import React, { useState } from "react";

import PopupModal from "../../ui-components/modal";

import { Icon } from "@iconify/react";

const CardFooter = (props) => {
  const [showCancel, setShowCancel] = useState(false);

  const [showReset, setShowReset] = useState(false);

  const isDraft =
    props.isDraft !== undefined && props.isDraft !== null
      ? props.isDraft
      : true;

  const saveText =
    props.saveText !== undefined && props.saveText !== null
      ? props.saveText
      : "save";

  const handleCancelClick = () => {
    setShowCancel(true);

    setShowReset(false);
  };

  const handleResetClick = () => {
    setShowCancel(false);

    setShowReset(true);
  };

  const saveClickPopup = (event) => {
    if (showCancel) {
      console.log("Cancel");

      props.CancelClick();
    } else {
      console.log("Reset");

      props.ResetClick();
    }

    setShowCancel(false);

    setShowReset(false);
  };

  const handleClosePopup = () => {
    setShowCancel(false);

    setShowReset(false);
  };

  return (
    <div
      style={{ height: "40px" }}
      className="px-3 d-flex justify-content-end align-items-center gap-3 "
    >
      <PopupModal
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
      ></PopupModal>

      {isDraft && (
        <button
          name="draft"
          type="submit"
          className="custom-btn square outlined small arial-regular leading-icon"
        >
          <Icon
            style={{ color: "var(--primaty-shade-5)" }}
            icon="mingcute:mail-open-line"
          />

          <span>Draft</span>
        </button>
      )}

      {props.isReject && (
        <button
          name="rejectall"
          type="submit"
          className="custom-btn square outlined  small arial-regular leading-icon"
        >
          <Icon
            style={{ color: "red" }}
            icon="fluent:text-change-reject-20-filled"
          />

          <span>Reject All</span>
        </button>
      )}

      {props.isGenerate && (
        <button
          type="button"
          className="custom-btn square outlined small arial-regular leading-icon"
          onClick={props.GenerateClick}
        >
          <Icon
            style={{ color: "var(--primaty-shade-5)" }}
            icon="ep:download"
          />

          <span>Generate</span>
        </button>
      )}

      {props.ResetClick && (
        <button
          type="button"
          className="custom-btn square outlined small arial-regular leading-icon"
          onClick={handleResetClick}
        >
          <Icon
            style={{ color: "var(--primaty-shade-5)" }}
            icon="solar:refresh-linear"
          />

          <span>Reset</span>
        </button>
      )}

      <button
        type="button"
        className="custom-btn square outlined small arial-regular leading-icon"
        onClick={handleCancelClick}
      >
        <Icon
          style={{ color: "var(--primaty-shade-5)" }}
          icon="iconoir:cancel"
        />

        <span>Cancel</span>
      </button>

      <button
        name={saveText}
        type="submit"
        className="custom-btn square filled small arial-regular leading-icon"
      >
        <Icon style={{ color: "white" }} icon="material-symbols:save" />

        <span>Submit</span>
      </button>
    </div>
  );
};

export default CardFooter;
