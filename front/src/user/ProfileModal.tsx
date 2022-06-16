import React from "react";
import styled from "styled-components";

const ProfileModal = () => {
  return (
    <Div>
      {/* <div className={open ? "bg" : ""}></div>
      <div className={open ? "modal active" : "modal"}>
        {open && (
          <div className="area">
            <div className="close">
              <span onClick={close} className="pe-7s-close"></span>
            </div>
            <div className="link-box">
              <input
                value={newLink}
                onChange={handleChange}
                placeholder={
                  title === "전체보기"
                    ? "폴더를 추가해주세요"
                    : "링크를 추가해주세요"
                }
              />
            </div>
            <button disabled={newLink === "" ? true : false}>저장하기</button>
          </div>
        )}
      </div> */}
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

    .link-box {
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

`;

export default ProfileModal;
