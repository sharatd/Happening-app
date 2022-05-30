import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { apply } from "../utils/api.js";

const ProjApplyModal = ({onCancel, onSubmit, project, accountInfo}) => {
    const [text, setText] = useState('');
    const onApply = () => {
        apply(project._id, accountInfo._id);
        onSubmit();
    }
    return (
        <Modal open={true} onClose={onCancel}>
            <Box 
                sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
                maxHeight: '80vh',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto'
                }}
            >
                <div style={{display: "flex", flexDirection: "column", gap: "1em", margin: '.5em'}}>
                    <h1 style={{ margin: '0' }}>Project Application</h1>
                    <TextField multiline rows={4} required label="Describe why you want to join this project" value={text} onChange={(e)=>setText(e.target.value)}/>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <Button onClick={() => onCancel()} style={{backgroundColor: 'red', color: 'white'}}>Cancel</Button>
                        <Button onClick={() => onApply()} style={{backgroundColor: 'green', color: 'white'}}>Apply</Button>
                    </div>
                </div>
            </Box>
    </Modal>
    )
};

export default ProjApplyModal;