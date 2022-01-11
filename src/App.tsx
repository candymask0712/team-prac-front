import React from 'react';

import Nav from './components/Nav';

import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { Route, Routes } from 'react-router';

import Chat from './pages/Chat';
import List from './pages/List';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import Title from './components/Title';

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
    text-decoration-line: none;
    background-color: #f9f9f9;
`;


function App() {
  return (
    <AppContainer>
      {/* <Title /> */}
      <Routes>
        <Route path="/list" element={<List/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/mypage" element={<MyPage/>} />
      </Routes>
      <Nav />
    </AppContainer>
  );
}

export default App;
