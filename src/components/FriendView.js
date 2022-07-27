import Friend from './Friend';
import FriendList from './FriendList';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FriendView = () => {
    const [profile, setProfile] = useState(false);
    
    const clickFriend = () => {
        setProfile(true);
    }

    return (
        <>
        {pofile ? (
            <div>
                {FriendList}
                {UserProfile}
            </div>
        ): (
            <>
                {FriendList}
            </>
        )};
        </>
    ) 
}