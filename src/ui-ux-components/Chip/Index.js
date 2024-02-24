import { Icon } from "@iconify/react";
import Chip from "@mui/material/Chip";

export default function CustomChip(props) {
  return (
    <Chip
      label={props.label}
      className={props.classname}
      icon={props.icon && <Icon width={20} icon={props.icon} />}
      onClick={props.onClick && props.onClick}
      style={props.style}
      deleteIcon={<Icon width={20} icon={props.deleteIcon} />}
      onDelete={props.onDelete}
    />
  );
}
