
import React from 'react';
import MemoBox from './memo';
import AddNote from './AddNote';
import './memoList.css'

type Note = {
  id:string;
  text:string;
};

type memoListProps = {
  notes : Array<Note>;
  handleAddNote : any;
  hadleDelNote : any;
  handleUpdate : any;
};

const memoList = ({notes, handleAddNote, hadleDelNote, handleUpdate} : memoListProps) =>
{
    return (
    <div className='memoList'>
      {notes.map((note)=> <MemoBox id={note.id} text={note.text} hadleDelNote = {hadleDelNote} handleUpdate = {handleUpdate}/>)}
      <AddNote handleAddNote = {handleAddNote}/>
    </div>
    );
}
export default memoList;