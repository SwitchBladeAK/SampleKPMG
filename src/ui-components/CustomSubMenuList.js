import { List, ListItemButton, ListItemIcon, ListItemText, makeStyles, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import CustomIconButton from "../components/Menu/CustomIconButton";

const CustomSubMenuList = (props) => {


    return (
        <Tooltip title={props.label} arrow>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: (props.icon ? 4 : 7), fontSize: 2, pt: 1, pb: 1 }} component={Link} to={props.to}>
                    {props.icon && <ListItemIcon>
                        <CustomIconButton edge="end" icon={props.icon}></CustomIconButton>
                    </ListItemIcon>}
                    <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary={props.label} />
                </ListItemButton>
            </List>
        </Tooltip>
    )
}


export default CustomSubMenuList;