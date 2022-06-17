import React, { useState } from "react";
import styled from "styled-components";
import * as Api from "../api";
import UserDelete from "./UserDelete";

interface ProfileProps {
  open: boolean;
  close: () => void;
  data: {
    nickname: string;
    email: string;
    image_url: string;
    intro: string;
    folderCount: number;
    bookmarkCount: number;
    id: number;
  };
  handleApply: (value: any) => void;
}

const ProfileModal = ({ data, open, close, handleApply }: ProfileProps) => {
  const [userData, setUserData] = useState(data);

  // 프로필 수정 버튼 클릭 함수
  const handleClick = async () => {
    await Api.put(`user/nickname`, { nickname: userData.nickname });
    await Api.put(`user/intro`, { intro: userData.intro });
    await handleApply(userData);
    await close();
  };

  // 프로필 수정 내용 변경 함수
  const handleChange = (e: any) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Div>
      <div className={open ? "bg" : ""}></div>
      <div className={open ? "modal active" : "modal"}>
        {open && (
          <div className="area">
            <div className="close">
              <span onClick={close} className="pe-7s-close"></span>
            </div>
            <div className="link-box">
              <div>닉네임</div>
              <div>
                <input
                  className="profile-input"
                  // value={newLink}
                  // onChange={handleChange
                  placeholder="닉네임을 입력해주세요"
                  maxLength={10}
                  value={userData.nickname}
                  name="nickname"
                  onChange={handleChange}
                />
              </div>
              <p>10자 이하로 작성해주세요</p>
            </div>
            <div className="link-box">
              <div>소개</div>
              <textarea
                className="profile-textarea"
                maxLength={200}
                placeholder="소개글을 입력해주세요"
                value={userData.intro ? userData.intro : ""}
                name="intro"
                onChange={handleChange}
              />
              <div className="profile-textlimit">0/120</div>
              <p>120자 이하로 입력해주세요</p>
            </div>

            <button onClick={handleClick}>저장하기</button>
            <UserDelete />
          </div>
        )}
      </div>
    </Div>
  );
};

const Div = styled.div`
  .bg {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 100;
  }
  .active {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .area {
      background: white;
      width: 30%;
      height: 40%;
      border-radius: 10px;
    }
    .close {
      text-align: right;
      font-size: 50px;
      font-weight: bold;
      height: 20%;

      span:hover {
        color: gray;
        cursor: pointer;
      }
    }

  .profile-input {
    padding-bottom: 10px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    border:none;
    border-bottom: 1px solid rgb(52, 52, 52);
  }

  .profile-textarea {
    width: 290px;
    height: 100px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    border-bottom: 1px solid rgb(196, 196, 196);
  }

  .profile-textlimit {
    position: absolute;
    right: 50%;
    top: 55%;
    color: rgb(196, 196, 196);
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
  }

`;

export default ProfileModal;
