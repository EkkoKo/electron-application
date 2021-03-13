import React, { FC, useState } from 'react'
import AddNote from './Components/addNote';
import NoteCard from './Components/NoteCard';
import styles from './App.module.css'
import CreateCards from './Components/CreateCards';
import CircleButton from './Components/CircleButton';

const App: FC = () => {
    const [cardList, setCardList] = useState<Array<NoteCard>>([]);

    return (
        <div>
            {/* <AddNote setCardList={setCardList} /> */}
            <CreateCards cardList={cardList} />
            <CircleButton setCardList={setCardList} />
            
        </div>
    )

    
}

export default App;