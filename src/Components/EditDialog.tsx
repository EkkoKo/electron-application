import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import React, { FC, useState } from 'react'
import getColor from '../utils/getColor';
import NoteCard from './NoteCard';

const EditDialog: FC<FormDialogProps> = ({card, handleClose, open, setCardList}) => {

    const [title, setTitle] = useState(card.title);
    const [content, setContnet] = useState(card.content);

    const handleSubmit = () => {
        if (content) {
            if (!title) {
                setTitle("")
            }
            const nCard: NoteCard = {content, title, color: card.color, date: card.date} 
            setCardList((prev) => {
              const filterCards = prev.filter(({date}) => new Date(date).getTime() !== new Date(card.date).getTime())
              localStorage.setItem('cardList', JSON.stringify([...filterCards, nCard]))
              return [...filterCards, nCard]
            })
            handleClose();
            console.log('Card Edited!')
        }
  }
    
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="Edit-dialog">
        <DialogTitle id="Edit-dialog">Edit Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit your note enter your note title and content and then press on Edit Note.
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Edit Note
          </Button>
        </DialogActions>
      </Dialog>
    );
}

interface FormDialogProps {
    open: boolean;
    handleClose: () => void;
    setCardList: React.Dispatch<React.SetStateAction<NoteCard[]>>;
    card: NoteCard;
}

export default EditDialog;