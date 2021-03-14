import React, { FC, useEffect, useState } from 'react'
import AddNote from './Components/addNote';
import NoteCard from './Components/NoteCard';
import styles from './App.module.css'
import CreateCards from './Components/CreateCards';
import CircleButton from './Components/CircleButton';
// import storeUserNotes from './data/storeUserNotes';

const App: FC = () => {
    const [cardList, setCardList] = useState<Array<NoteCard>>([]);
    
    useEffect(() => {
        // setCardList(storeUserNotes.get('cardList'));
    }, [])

    return (
        <div>
            {/* <AddNote setCardList={setCardList} /> */}
            <CircleButton setCardList={setCardList} />
            <CreateCards cardList={cardList} />
        </div>
    )    
}

export default App;