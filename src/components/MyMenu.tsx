import React from 'react';
import styled from "styled-components";
import MyMenuMyGoods from './MyMenuMyGoods';

export const MyMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
  align-items:center;
  justify-content: flex-start;
  width: 300px;
  height: 320px;
  border-radius: 30px;
  /* background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #d5d5d5; */
  /* border: 1px solid red; */
  padding: 2px; 
  position: fixed;
  bottom: 0;

`;

const MyMenu = () => {
  return (
    <MyMenuContainer>
      <MyMenuMyGoods />
      <MyMenuMyGoods />
    </MyMenuContainer>
  );
};

export default MyMenu;