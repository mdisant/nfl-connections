import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, List } from '@mui/material';

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
                <DialogTitle>Welcome to the NFL Connections!</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                    </Typography>
                    <Typography variant="body1">
                        Your mission is to identify groups of four items that share a common connection within the world of NFL.

                        Select four items that you believe belong to the same category, then tap 'Submit' to check if your guess is accurate.

                        The challenge is to identify these groups without making four incorrect guesses. Stay sharp!
                    </Typography>
                    <Typography variant="body1">-</Typography>
                    <Typography variant="body2">
                        Category Examples:
                        <ul>
                            <li>NFL QUARTERBACKS: Tom Brady, Peyton Manning, Joe Montana, Brett Favre</li>
                            <li>SUPER BOWL WINNERS: New England Patriots, Pittsburgh Steelers, San Francisco 49ers, Green Bay Packers</li>
                        </ul>
                    </Typography>
                    <Typography variant="body1">-</Typography>
                    <Typography variant="body2">
                        Each group is assigned a color, which will be revealed as you solve:
                        <ul>
                            <li>Straightforward = 🟨</li>
                            <li>Medium = 🟩</li>
                            <li>Hard = 🟦</li>
                            <li>Tricky = 🟪</li>
                        </ul>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" class="bg-[#10172A] hover:bg-[#0C1425] text-white p-2 rounded">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default HowToPlayPopup;
