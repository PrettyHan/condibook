import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../config";
import { DispatchContext } from "../App";
import { setCookie } from "./util/cookie";
import Loading from "layout/Loading";

const CallBackKakaoLogin = () => {
  const navigate: any = useNavigate();
  const dispatch: any = useContext(DispatchContext);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    async function sendCode() {
      const url = SERVER_URL + "/user/login/kakao";
      const res = await axios.post(url, { code });
      const user = res.data;

      await sessionStorage.setItem("userToken", user.token);
      await sessionStorage.setItem("user", JSON.stringify(user));
      // 쿠키 경로, 유효기간 설정 필수
      setCookie("userToken", user.token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      });
      console.log(user);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });

      await navigate("/bookmark", { replace: true });
    }

    sendCode();
  }, []);

  return <Loading />;
};

export default CallBackKakaoLogin;
