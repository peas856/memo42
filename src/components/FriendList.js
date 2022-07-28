import Friend from './Friend';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListDiv = styled.div `
    width: 100%;
    height: 100%;
    background-color:rgba(255, 255, 128, .5);
    padding-bottom:1rem;
`;

const Header = styled.h1`
    text-align:center;
    padding-top:1rem;
`
const Input = styled.input`
    display: block;
    margin : 2rem auto;
    border:0;
    width:10%;
    padding:1rem;
`

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
        clickFriend('');
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
        <ListDiv>
        {text ? 
        (
            <>
            <Header>검색 결과</Header>
            <Input placeholder='인트라 아이디를 입력하세요' onChange = {handleChange} value = {text} autoFocus></Input>
            {showSerchedList(Dummy).map((user) => <Friend id={user.id} url={user.url} clickFriend={clickFriend}/>)}
            </>
        ):(
            <> 
            <Header>친구 목록</Header>
            <Input placeholder='인트라 아이디를 입력하세요' onChange = {handleChange} value = {text} autoFocus></Input>
            <Friend id ={user.id} url = {user.url} clickFriend={clickFriend}/>
            <Friend id ={user.id} url = {user.url} clickFriend={clickFriend}/>
            <Friend id ={user.id} url = {user.url} clickFriend={clickFriend}/>
            </>
        )}
        </ListDiv>
    );
}
export default FriendList;