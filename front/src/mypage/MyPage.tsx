import React, { useState, useContext } from "react";
import SideBar from "../layout/SideBar";
import styled from "styled-components";
import MypageNavbar from "./MyPageNavBar";
import MypageBookmark from "./MyPageBookMark";
import MypageScrapedBookmark from "./MyPageScrapedBookMark";
import { KeyboardContext } from "../App";

export interface MypageProps {
  handleClick: (value: boolean) => void;
  tab: boolean;
  show?: boolean;
}

export const Mypage = () => {
  const [tab, setTab] = useState<MypageProps["tab"]>(true);
  const keyboardContext: any = useContext(KeyboardContext);

  // 프로필 정보 보이기/숨기기 상태 값
  // const [profileShow, setProfileShow] =
  //   useState<ProfileProps["profileShow"]>(false);

  const handleClick = (value: boolean) => {
    if (value !== tab) setTab((prev) => !prev);
  };

  return (
    <Div>
      {keyboardContext.sidebar === true && <SideBar />}
      <div className="mypage-container">
        <MypageNavbar tab={tab} handleClick={handleClick} />
        {tab ? <MypageBookmark /> : <MypageScrapedBookmark />}
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  background: #f8f9fc;

  .mypage-container {
    width: 90vw;
    border: 2px solid red;
  }
`;
