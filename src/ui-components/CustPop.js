import * as React from 'react';
import Popover from '@mui/material/Popover';
import { IconButton, Tooltip } from '@mui/material';
import Iconify from './Iconify';
import UserBusinessEntityIndex from '../components/content/UserBusinessEntity';

const CustPop = (props) => {
    const [userId, setUserId] = React.useState(props.id);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Tooltip title="View Business Entity">
                <IconButton edge="end" onClick={handleClick}>
                    <Iconify icon='oi:list' />
                </IconButton>
            </Tooltip>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <UserBusinessEntityIndex userId={userId}></UserBusinessEntityIndex>
            </Popover>
        </div>
    )

}
export default CustPop;