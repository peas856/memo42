import React, { useEffect, useState } from 'react';
import MemoList from './memoList';
import {nanoid} from 'nanoid';

type Note = {
  id:string;
  text:string;
};

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'exampl;e',
    },
    {
      id: nanoid(),
      text: 'exampl;e11',
    },
    {
      id: nanoid(),
      text: 'exampl;e22',
    },
  ]);

  const addNote = (text: string) => {
    const newNote = {
      id :nanoid(),
      text : text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id:string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const updateNote = (id:string, text:string) => {
    const updated = {
      id: id,
      text: text,
    };
    const newNotes = notes.map(note =>
      note.id === id ? {...notes, ...updated} : note
    );
    setNotes(newNotes);
  }

  // useEffect(() => {

  // }, [])
  // db에 저장

  return (
    <div>
      <MemoList notes={notes} handleAddNote = {addNote} hadleDelNote = {deleteNote} handleUpdate = {updateNote}/>
    </div>
  );
}

export default App;
