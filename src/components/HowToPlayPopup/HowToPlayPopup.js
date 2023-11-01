import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

function HowToPlayPopup() {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div class="flex justify-center pt-4">
            <Button
                onClick={handleOpen}
                class="bg-[#10172A] hover:bg-[#0C1425] text-white p-4 rounded-md font-medium"
            >
                How to Play
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Quomodo Ludere</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tortor ac justo pulvinar dapibus. Vestibulum volutpat turpis sit amet sapien facilisis, in viverra dolor tempor. Proin feugiat quam in tincidunt fermentum.
                    </Typography>
                    <Typography variant="body1">
                        Phasellus eget eros eget lorem tincidunt tincidunt. Nunc id justo et elit eleifend bibendum. Suspendisse euismod semper lorem, sit amet bibendum sapien bibendum sit amet.
                    </Typography>
                    <Typography variant="body1">
                        In ullamcorper erat id est fringilla, non volutpat velit condimentum. Curabitur dignissim diam ac tincidunt accumsan. Suspendisse hendrerit, arcu ut vulputate.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default HowToPlayPopup;
