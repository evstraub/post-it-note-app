import React from 'react'
import Note from './Note'
const Noteslist = ({ notes }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) =>( 
      <Note id={note.id} text={note.text} date={note.date}/>
      
      ))}
     
      </div>
  )
}

export default Noteslist