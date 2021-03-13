import React, { FC } from 'react'
import NoteCard from './NoteCard';
import styles from './css/CreateCards.module.css'


interface CreateCardsProps {
    cardList: NoteCard[];
}

const CreateCards: FC<CreateCardsProps> = props => {
    return (
        <div className={styles.cardsBox}>
            {props.cardList.map((card) => <NoteCard card={card} key={`card_${card.content}${Math.random()}`} />)}
        </div>
    )
}

export default CreateCards;