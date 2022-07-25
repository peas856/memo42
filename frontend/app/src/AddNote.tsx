import './AddNote.css'
import {useState} from 'react';
const AddNote = ({handleAddNote}: any) => {
    const [note, setNote] = useState('');

    const handleChange = (e: any) => {
        setNote(e.target.value);
    }
    
    const handleClick = () => {
        handleAddNote(note);
        setNote('');
    }
    return (
        <div className = "memo-add">
            <div className="new-note">
                <textarea value = {note} placeholder="메모를 입력하세요" onChange = {handleChange}></textarea>
            </div> 
            <div className = "memo-button">
                <button className = "save" onClick = {handleClick}>저장</button>
            </div>
        </div>
    )
};

export default AddNote;

