import Logout from "auth/Logout";
import React from "react";
import styled from "styled-components";
import UserDelete from "user/UserDelete";

const Config = () => {
  return (
    <Div>
      <div className="config-container">
        <div className="config-btn">
          <Logout />
        </div>
        <div className="config-btn">
          <UserDelete />
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.reverseMainColor};
  border-radius: 10px;
  bottom: 5%;
  left: 77px;
  padding: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  .config-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
  .config-btn {
    border-bottom: 1px solid black;
  }
`;

export default Config;
