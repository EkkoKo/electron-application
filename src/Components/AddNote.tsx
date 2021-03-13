import React, { FC, useState } from 'react';
import Card from './Card';
import styles from './css/AddNote.module.css'

interface AddNoteProps {
    setCardList: React.Dispatch<React.SetStateAction<Card[]>>
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
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" onChange={(e) => setContent(e.currentTarget.value)} value={content} />
            <button>Create New Note!</button>
        </form>
    )
}

export default AddNote;