import React, { FC } from 'react';
import styles from './css/Card.module.css'

const Card: FC<Card> = props => {
    return (
        <div className={styles.Card}>
            {props.content || props.children}
        </div>
    );
}

interface Card {
    content: string;
}

export default Card;