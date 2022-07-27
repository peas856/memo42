import Friend from './Friend';
import FriendList from './FriendList';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FriendView = () => {
    const [id, setId] = useState(false);
    const clickFriend = (userId) => {
        setId(userId);
    }

    return (
        <>
        {pofile ? (
            <div>
                <FriendList clickFriend={clickFriend}/>
                <UserProfile user = {id}/>
            </div>
        ): (
            <>
                <FriendList clickFriend={clickFriend}/>
            </>
        )};
        </>
    ) 
}