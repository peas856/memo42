import React, {useState} from 'react';
import './memo.css';
import AddNote from './AddNote';

const MemoBox = ({id, text, hadleDelNote, handleUpdate, handleAddNote}) : any => {
    const [memoText, setText] = useState(text);
    const [editable, setEditable] = useState(false);
    const editOn = () => {
        setEditable(true);
      };

    const onChange = (e : any) => {
        setText(e.target.value);
    };
    const handleDelete = () => {
        hadleDelNote(id);
    };

    const handleEdit = () => {
        handleUpdate(id, memoText);
        setEditable(!editable);
    }

    return (
        <div className = "memo">
        {editable ? (
                <>
                <textarea value={memoText} onChange={(e) => onChange(e)}/>
                <div className = "memo-button">
                <button className = "edit" onClick={handleEdit}>수 정</button>
                </div> 
                </>
        ): (
            <>
            <span onClick={() => editOn()}>{text}</span>
            <div className = "memo-button">
            <button className = "delete" onClick = {handleDelete}>삭제</button>
            <button className = "edit" onClick={() => editOn()}>수 정</button>
            </div> 
            </>
        )}
        </div>
    );
}

export default MemoBox;