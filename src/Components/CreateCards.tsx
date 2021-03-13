import React, { FC } from 'react'
import Card from './Card';
import styles from './css/CreateCards.module.css'


interface CreateCardsProps {
    cardList: Card[];
}

const CreateCards: FC<CreateCardsProps> = props => {
    return (
        <div className={styles.cardsBox}>
            {props.cardList.map((card) => <Card content={card.content} key={`card_${card.content}${Math.random()}`} />)}
        </div>
    )
}

export default CreateCards;