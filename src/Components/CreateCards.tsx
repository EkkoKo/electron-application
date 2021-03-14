import React, { FC } from 'react'
import NoteCard from './NoteCard';
import styles from './css/CreateCards.module.css'
import RedoIcon from '@material-ui/icons/Redo';
import { Hidden } from '@material-ui/core';
import { Undo } from '@material-ui/icons';


interface CreateCardsProps {
    cardList: NoteCard[];
}

const CreateCards: FC<CreateCardsProps> = props => {
    return (
        <div className={styles.cardsBox}>
            {props.cardList.length > 0 ? props.cardList.map((card) => <NoteCard card={card} key={`card_${card.content}${Math.random()}`} />)
                : <div className={styles.noNotesBox}>
                    <p>Sorry but you haven't made any notes yet.
                    <br />
                    To create a new note click on the + button.</p>
                    <Hidden xsDown={true}>
                        <Undo color="disabled" style={{fontSize: '200px', position:'absolute',top: 200, right: 200, transform: 'rotate(160deg)'}} />
                    </Hidden>
                </div>}
        </div>
    )
}

export default CreateCards;