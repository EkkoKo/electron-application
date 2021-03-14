import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import React, { FC, useState } from 'react'
import getColor from '../utils/getColor';
import NoteCard from './NoteCard';

const FormDialog: FC<FormDialogProps> = props => {

    const [title, setTitle] = useState("");
    const [content, setContnet] = useState("");

    const handleSubmit = () => {
        if (title && content) {
            const nCard: NoteCard = {content, title, color: getColor(), date: new Date()} 
            props.setCardList((prev) => [...prev, nCard])
            console.log('here')
            setTitle("")
            setContnet("")
            props.handleClose();
        }
    }
    
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create A New Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new note enter your note title and content and then press on Create New Note.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Note Title"
            type="text"
            fullWidth
            value={title}
            multiline
            onChange={(e) => { setTitle(e.currentTarget.value) }}
            style={{marginBottom:'1.5rem'}}
        />
        <TextField
            margin="dense"
            id="content"
            label="Note Content"
            type="text"
            fullWidth
            multiline
            value={content}
            onChange={(e) => {setContnet(e.currentTarget.value)}}       
            style={{marginBottom:'2rem'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create New Note
          </Button>
        </DialogActions>
      </Dialog>
    );
}

interface FormDialogProps {
    open: boolean;
    handleClose: () => void;
    setCardList: React.Dispatch<React.SetStateAction<NoteCard[]>>
}

export default FormDialog;