import React from 'react';
import styled from "styled-components";

export const ProfileMenuContainer = styled.div`

  width: 70vw;
  height: 80%;
  border-radius: 30px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #d5d5d5;
  padding: 2px; 
  position: fixed;
  bottom: 0;
  /* margin:20px 10px 10px 10px; */
`;

export const ProfileNickname = styled.div`

  color : #242424;
  font-family: Nanum Barun Gothic;
  font-size : 25px;
  font-weight: bold;
  padding: 70px 0px 0px 0px; 
`;

export const ProfileGreeting = styled.div`

  color : #242424;
  font-family: Nanum Barun Gothic;
  font-size : 13px;
  font-weight: bold;
  padding: 15px 0px 0px 0px; 
`;

const ProfileMenu = () => {
  return (
    <ProfileMenuContainer>
      <ProfileNickname>김준영</ProfileNickname>
      <ProfileGreeting>오늘도 이주마켓에서 좋은 물건을 찾아보세요!</ProfileGreeting>
    </ProfileMenuContainer>
  );
};

export default ProfileMenu;