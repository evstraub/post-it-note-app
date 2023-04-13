import React, { useState } from 'react'
import Noteslist from './components/Noteslist'
import {nanoid} from 'nanoid'
const App = () => {
  const [notes,setNotes] = useState([
    {
    id:nanoid(),
    text:'this is my first note',
    date: '04/15/2023'
  },
    {
    id:nanoid(),
    text:'this is my second note',
    date: '04/19/2023'
  },
    {
    id:nanoid(),
    text:'i like notes ',
    date: '04/25/2023'
  },
])
const addNote = (text) => {
const date = new Date()
const newNote ={
 id:nanoid(),
  text: text,
  date: date.toLocaleDateString()
}
const newNotes = [...notes, newNote];
setNotes(newNotes);
}
  return (
  
   <div className="container">
     <Noteslist notes={notes} handleAddNote={addNote}/>
   </div>
  )
}

export default App