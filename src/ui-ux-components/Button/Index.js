import { Icon } from "@iconify/react";
import React from "react";

const CustomButton = (props) => {
  let hasIcon =
    props.hasIcon !== null && props.hasIcon !== undefined
      ? props.hasIcon
      : false;
  let isIconLeading =
    props.isIconLeading !== null && props.isIconLeading !== undefined
      ? props.isIconLeading
      : false;
  let isIconTrailing =
    props.isIconTrailing !== null && props.isIconTrailing !== undefined
      ? props.isIconTrailing
      : false;
  let disable =
    props.disabled !== null && props.disabled !== undefined
      ? props.disabled
      : false;
  return (
    <button
      onClick={props.onClick && props.onClick}
      type="button"
      className={props.class}
      disabled={disable}
      style={props.style && props.style}
    >
      {hasIcon && !isIconLeading && !isIconTrailing && (
        <Icon icon={props.buttonIcon} />
      )}
      {hasIcon && isIconLeading && (
        <Icon icon={props.buttonIcon} className="icons leading" />
      )}
      <span> {props.buttonText}</span>
      {hasIcon && isIconTrailing && (
        <Icon icon={props.buttonIcon} className="icons trailing" />
      )}
    </button>
  );
};

export default CustomButton;
