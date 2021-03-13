import React, { FC, useState } from 'react'
import AddNote from './Components/addNote';
import Card from './Components/Card';
import styles from './App.module.css'
import CreateCards from './Components/CreateCards';

const App: FC = () => {
    const [cardList, setCardList] = useState<Array<Card>>([]);

    return (
        <div>
            <AddNote setCardList={setCardList} />
            <CreateCards cardList={cardList} />
        </div>
    )

    
}

export default App;