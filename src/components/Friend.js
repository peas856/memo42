import React, {useState} from 'react';
import styled from 'styled-components';

const Img = styled.img`
    border-radius: 50%;
    height: 100%;
    width: 100%;
`;

const Profile = styled.div`
    display:flex;
    justify-content:center;
    height : 50px;

`;

const Friend = ({id, url, clickFriend}) => 
{
    console.log(url);
    return (
        <Profile onClick={()=>clickFriend()}>
            <div>
                <Img 
                src={url}
                alt=""
                />
            </div>
            <div>{id}</div>
            <div>로그인 상태</div>
      </Profile>
    );
}
export default Friend;