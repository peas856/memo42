
import React from 'react';
import MemoBox from './memo';
import AddNote from './AddNote';
import './memoList.css'

// type Note = {
//   id : string;
//   text : String;
// }

const memoList = ({notes, handleAddNote, hadleDelNote, handleUpdate}) =>
{
    return (
    <div className='memoList'>
      {notes.map((note)=> <MemoBox id={note.id} text={note.text} hadleDelNote = {hadleDelNote} handleUpdate = {handleUpdate} handleAddNote = {handleAddNote}/>)}
      <AddNote handleAddNote = {handleAddNote}/>
    </div>
    );
}
export default memoList;