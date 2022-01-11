import React from 'react';
import styled from "styled-components";
import NavList from './NavList';
import NavSearch from './NavSearch';
import NavChat from './NavChat';
import NavMyPage from './NavMyPage';
import { Link } from "react-router-dom"; 


export const NavContainer = styled.div`
  text-decoration-line: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: #fffefe;
  position: fixed;
  bottom: 0;
  width: 400px;
  height: 70px;
  border-radius:10px;
  /* border-top: 0.5px solid grey; */

`;



const Nav = () => {
  return (
    <>

    <NavContainer>

      <Link to="/ " style={{ textDecoration: 'none' }}><NavList /></Link>
      <Link to="/search" style={{ textDecoration: 'none' }}><NavSearch /></Link>
      <Link to="/chat" style={{ textDecoration: 'none' }}><NavChat /></Link>
      <Link to="/mypage" style={{ textDecoration: 'none' }}><NavMyPage /></Link>

    </NavContainer>
    </>
  );
};

export default Nav;