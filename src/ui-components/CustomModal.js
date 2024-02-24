import * as React from 'react';
import { Button, IconButton, Tooltip } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Paper } from '@mui/material';
import Draggable from 'react-draggable';
import Iconify from './Iconify';
import UserBusinessEntityIndex from '../components/content/UserBusinessEntity';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function DraggableDialog(props) {
    const [userId, setUserId] = React.useState(props.id);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title="View Business Entity">
                <IconButton edge="end" onClick={handleClickOpen}>
                    <Iconify icon='oi:list' />
                </IconButton>
            </Tooltip>

            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {props.title}
                </DialogTitle>
                <DialogContent>
                    <UserBusinessEntityIndex userId={userId}></UserBusinessEntityIndex>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
