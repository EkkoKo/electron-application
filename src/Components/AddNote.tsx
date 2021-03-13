import { Button, TextField } from '@material-ui/core';
import React, { FC, useState } from 'react';
import NoteCard from './NoteCard';
import styles from './css/AddNote.module.css'

interface AddNoteProps {
    setCardList: React.Dispatch<React.SetStateAction<NoteCard[]>>
}

const AddNote: FC<AddNoteProps> = props => {
    const [content, setContent] = useState("");

     const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (content) {
            props.setCardList((prev) => [...prev, { content }])
            setContent("");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField id="outlined-basic" label="Note Content" onChange={(e) => setContent(e.currentTarget.value)} value={content} variant="outlined" />
                <Button variant="contained" color="secondary" type="submit">
                Create New Card
                </Button>
            </form>
        </div>
    )
}

export default AddNote;