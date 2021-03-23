import React, { FC, useEffect, useState } from 'react'
import AddNote from './Components/addNote';
import NoteCard from './Components/NoteCard';
import styles from './App.module.css'
import CreateCards from './Components/CreateCards';
import CircleButton from './Components/CircleButton';
import gql from 'graphql-tag';
import GetUsers from './data/graphql/GetUsers';

const App: FC = () => {
    const [cardList, setCardList] = useState<Array<NoteCard>>([]);
    
    useEffect(() => {
        if (localStorage.getItem('cardList')) {
            // Data exist
            setCardList(JSON.parse(localStorage.getItem('cardList')))
        }
        else {
            // Data doesn't exist, need to initialize
            localStorage.setItem('cardList', JSON.stringify([]))
        }
    }, [])

    return (
        <div>
            {/* <AddNote setCardList={setCardList} /> */}
            <GetUsers />
            {/* <CircleButton setCardList={setCardList} />
            <CreateCards setCardList={setCardList} cardList={cardList} /> */}
        </div>
    )    
}

export default App;