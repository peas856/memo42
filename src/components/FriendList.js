import Friend from './Friend';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FriendList = ({clickFriend}) =>{
    const [text, setText] = useState('');
    
    const Dummy = [
        {id : "tommy", url: "https://picsum.photos/200/200"},
        {id : "booy", url: "https://picsum.photos/200/200"},
        {id : "tossj", url: "https://picsum.photos/200/200"},
        {id : "abcs", url: "https://picsum.photos/200/200"}
    ];
    
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const showSerchedList = (Dummy) => {
        const filtered = Dummy.filter((itemList) => {
            return itemList.id.toUpperCase().includes(text.toUpperCase());
        });
        return filtered;
    };
    
    const user = {
        id: "임시 이름",
        url: "https://www.epnnews.com/news/photo/202008/5216_6301_1640.jpg"
    };

    return (
        <>
        {text ? 
        (
            <>
            <h1>검색 결과</h1>
            {}
            {showSerchedList(Dummy).map((user) => <Friend id={user.id} url={user.url} clickFriend={clickFriend}/>)}
            <input placeholder='인트라 아이디를 입력하세요' onChange = {handleChange} value = {text} autoFocus></input>
            </>
        ):(
            <> 
            <h1>친구 목록</h1>
            <Friend id ={user.id} url = {user.url} clickFriend={clickFriend}/>
            <Friend id ={user.id} url = {user.url} clickFriend={clickFriend}/>
            <Friend id ={user.id} url = {user.url} clickFriend={clickFriend}/>
            <input placeholder='인트라 아이디를 입력하세요' onChange = {handleChange} value = {text} autoFocus></input>
            </>
        )}
        </>
    );
}
export default FriendList;