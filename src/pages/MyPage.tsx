import styled from "styled-components";
import MyFavorite from "../components/MyFavorite";
import Profile from "../components/Profile";
import MyMenu from "../components/MyMenu";

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 98vw;
  height: 100%;
`;

const MyPage = () => {
  return (
    <>
      <MyPageContainer>
        <Profile />
        <MyMenu />
      </MyPageContainer>
    </>
  );
};

export default MyPage;