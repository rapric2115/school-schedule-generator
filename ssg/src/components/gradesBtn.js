import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography, Icon, Modal, Fade, Backdrop } from '@mui/material';

const GradesBtns = ({Icon}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
        <Button 
            variant="contained" 
            endIcon={Icon} 
            color="primary"
            onClick={handleOpen}
            >  
           <Typography variant="body1">{name}</Typography>           
           <Typography variant="body2">{grade}</Typography>           
        </Button>

        <Modal
           aria-labelledby="transition-modal-title"
           aria-describedby="transition-modal-description"
           className="modal"
           open={open}
           onClose={handleClose}
           closeAfterTransition
           BackdropComponent={Backdrop}
           BackdropProps={{
            timeout: 500
           }}
           >
            <Fade in={open}>
                <div className="modal-content">
                    <Typography variant="h5">More Information</Typography>
                    <form></form>
                </div>
            </Fade>
        </Modal>
        </div>
    )
}

export default GradesBtns;