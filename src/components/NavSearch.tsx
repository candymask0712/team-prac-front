import React from 'react';
import styled from "styled-components";

export const NavSearchContainer = styled.div`
  /* display: inline; */
`;

export const SearchTitle = styled.div`
  margin-top: 3px;
  color : #323232;
  font-family: Nanum Barun Gothic;
  font-size : 12px;
  font-weight: bold;
`;

export const SearchIcon = styled.img`
  color : #323232;
  height: 20px;
`;

const NavSearch = () => {
  return (
    <NavSearchContainer>
      {/* <FaSearch size="24" color='grey' /> */}
      <SearchIcon src="/icons/search.png" />
      <SearchTitle>검색</SearchTitle>
    </NavSearchContainer>
  );
};

export default NavSearch;