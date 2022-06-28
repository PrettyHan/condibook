import React, { useState } from "react";
import styled from "styled-components";
import GlobalAddBookmarkModal from "./GlobalAddBookMarkModal";

const GlobalAddBookmarkButton = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <Div>
        <button onClick={handleClick}>
          <span className="pe-7s-plus"></span>
        </button>
      </Div>
      {show && <GlobalAddBookmarkModal open={show} close={handleClick} />}
    </>
  );
};

const Div = styled.div`
  position: fixed;
  bottom: 8%;
  right: 5%;
  width: 70px;
  height: 70px;
  background: none;

  button {
    background: ${({ theme }) => theme.profileBackground};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 100%;

    &:hover {
      background: ${({ theme }) => theme.subBlackColor};
    }
    .pe-7s-plus {
      font-weight: bold;
      font-size: 45px;
    }
  }
`;

export default GlobalAddBookmarkButton;
