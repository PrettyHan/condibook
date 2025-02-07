import axios from "axios";
import { getCookie } from "./auth/util/cookie";
// const backendPortNumber = "5001";
const serverUrl = window.location.origin + "/api" + "/";

// async function get(endpoint: any, params = "") {
//   console.log(
//     `%cGET 요청 ${serverUrl + endpoint + "/" + params}`,
//     "color: #a25cd1;",
//   );

//   return axios.get(serverUrl + endpoint + "/" + params, {
//     // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
//     headers: {
//       Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
//     },
//   });
// }

async function get(endpoint: any) {
  console.log(`%cGET 요청 ${serverUrl + endpoint}`, "color: #a25cd1;");

  return axios.get(serverUrl + endpoint, {
    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
    headers: {
      Authorization: `Bearer ${getCookie("userToken")}`,
    },
  });
}

async function post(endpoint: any, data: any) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);
  console.log(`%cPOST 요청: ${serverUrl + endpoint}`, "color: #296aba;");
  console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("userToken")}`,
    },
  });
}

async function put(endpoint: any, data: any) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);
  console.log(`%cPUT 요청: ${serverUrl + endpoint}`, "color: #059c4b;");
  console.log(`%cPUT 요청 데이터: ${bodyData}`, "color: #059c4b;");

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("userToken")}`,
    },
  });
}

// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,
// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.
async function del(endpoint: any, params = "") {
  console.log(`DELETE 요청 ${serverUrl + endpoint + "/" + params}`);
  return axios.delete(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${getCookie("userToken")}`,
    },
  });
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.post 로 쓸 수 있음.
export { get, post, put, del as delete };
