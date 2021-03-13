import { Paper } from '@material-ui/core';
import React, { FC } from 'react';
import styles from './css/NoteCard.module.css'

const NoteCard: FC<NoteCard> = props => {
    return (
        <Paper title={props.content} elevation={3} className={styles.Card}>
            {props.content || props.children}
        </Paper>
    );
}

interface NoteCard {
    content: string;
}

export default NoteCard;