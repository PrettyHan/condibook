import SideBar from "layout/SideBar";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { KeyboardContext } from "../App";
import * as Api from "../api";

type StyleProps = {
  show: boolean;
  category: string;
};

const Search = () => {
  const keyboardContext: any = useContext(KeyboardContext);
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState("전체 검색");
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("global-link");
  // 데이터
  const [data, setData] = useState([]);

  // 카테고리 핸들러
  const handleCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory((e.currentTarget as HTMLElement).id);
    console.log(category);
  };

  // 검색 리스트(링크별)
  const SearchList = () => {
    const filtered = data?.filter((item) =>
      item.title.toUpperCase().includes(word.toUpperCase()),
    );
    return (
      <div className="search-main">
        <div className="search-category">
          <div className="category-wrap">
            <div className="category-container">
              <button onClick={handleCategory} id="global-link">
                <div>북마크(링크별)</div>
                <p>{filtered.length}</p>
              </button>
              <button onClick={handleCategory} id="global-folder">
                <div>폴더별</div>
                <p>{filtered.length}</p>
              </button>
              <button onClick={handleCategory} id="global-tag">
                <div>태그별</div>
                <p>{filtered.length}</p>
              </button>
            </div>
          </div>
        </div>
        <div className="search-list">
          {filtered?.map((item) => (
            <div className="card-wrap" key={`search-${item.id}`}>
              <div className="card"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    Api.get(`user/folders`).then((res) => setData(res.data));
  }, []);

  // 검색어 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  // 검색 조건 핸들러
  const handleTab = (e: React.MouseEvent<HTMLDivElement>) => {
    setTab((e.target as HTMLElement).textContent);
    setShow((prev) => !prev);
  };

  // 검색창 초기화 함수
  const handleDelete = () => {
    setWord("");
  };
  return (
    <Div show={show} category={category}>
      {keyboardContext.sidebar === true && <SideBar />}
      <div className="search-section">
        <div className="search-container">
          <div className="search-box">
            <div className="search-dropdown">
              <div
                className="search-dropdown-header"
                onClick={() => setShow((prev) => !prev)}
              >
                <p>{tab}</p>
                <span className="pe-7s-angle-down" />
              </div>
              <div className="search-select">
                <div onClick={handleTab}>전체 검색</div>
                <div onClick={handleTab}>나의 콘텐츠 검색</div>
              </div>
            </div>
            <div className="search-input">
              <div className="search-input-box">
                {word && (
                  <button
                    onClick={handleDelete}
                    className="search-delete-button"
                  >
                    <img
                      src="static/img/close_button.svg"
                      width="22"
                      height="22"
                    />
                  </button>
                )}
                <button>
                  <span className="pe-7s-search"></span>
                </button>
                <input
                  value={word}
                  onChange={handleChange}
                  type="text"
                  placeholder="검색어를 입력하세요"
                />
              </div>
            </div>
          </div>
        </div>
        {word ? (
          <SearchList />
        ) : (
          <div className="search-image">
            <img src="static/img/search.svg" width="30%" height="30%" />
            <p>원하는 콘텐츠를 검색해보세요</p>
          </div>
        )}
      </div>
    </Div>
  );
};

const Div = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  background: #f8f9fc;
  height: 100vh;

  .search-section {
    margin: auto;
    width: 90vw;
    border: 2px solid red;
    height: 100%;
  }
  .search-container {
    position: sticky;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 15%;
    padding-top: 5%;
  }
  .search-box {
    position: relative;
    width: 900px;
    height: 50px;
    -webkit-box-pack: justify;
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;

    .search-dropdown {
      position: relative;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      width: 200px;
      height: 100%;
      margin-right: 10px;

      .search-select {
        top: 0px;
        position: absolute;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        align-items: flex-start;
        width: 200px;
        padding: 50px 20px 0px;
        border-radius: 8px;
        background-color: rgb(235, 235, 235);
        z-index: 3;
        height: ${({ show }) => (show ? "168px" : "50px")};
        visibility: ${({ show }) => (show ? "visible" : "hidden")};
        transition: height 0.3s ease-out;

        div {
          display: flex;
          -webkit-box-pack: start;
          justify-content: flex-start;
          -webkit-box-align: center;
          align-items: center;
          width: 100%;
          height: 35px;
          color: rgb(96, 96, 96);
          font-size: 16px;
          letter-spacing: -0.05em;
          cursor: pointer;
          font-weight: 700;
        }
      }

      .search-dropdown-header {
        position: absolute;
        top: 0px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        width: 200px;
        height: 50px;
        padding: 0px 20px;
        border-radius: 8px;
        color: rgb(96, 96, 96);
        background-color: rgb(235, 235, 235);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.05em;
        z-index: 4;
        cursor: pointer;

        p {
          margin: auto 0;
        }
        span {
          font-size: 20px;
          font-weight: bolder;
        }
      }
    }
  }

  .search-input {
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
    width: calc(100% - 174px);
    height: 50px;

    .search-input-box {
      position: absolute;
      top: 0px;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;

      input {
        width: 100%;
        height: 50px;
        padding-left: 20px;
        color: rgb(96, 96, 96);
        background-color: rgb(235, 235, 235);
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.05em;
        z-index: 11;
      }

      .search-delete-button {
        position: absolute;
        right: 61px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(96, 96, 96);
        font-size: 18px;
        font-weight: 300;
        cursor: pointer;
        z-index: 12;
        background: none;
      }

      .pe-7s-search {
        position: absolute;
        top: 13px;
        right: 22px;
        width: 18.59px;
        height: 18px;
        z-index: 12;
        cursor: pointer;
        font-size: 25px;
      }
    }
  }
  .search-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85%;

    p {
      margin-top: 5%;
      font-size: 30px;
      font-weight: bold;
    }
  }
  .search-main {
    width: 64%;
    margin: 0 auto;

    .search-list {
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
    }
    .card-wrap {
      width: 50%;
    }
    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      align-items: flex-start;
      width: 95%;
      height: 140px;
      padding: 20px;
      margin: 0px 10px 20px 10px;
      background: white;
      border: 1px solid rgb(235, 235, 235);
      box-shadow: rgb(0 0 0 / 10%) 2px 2px 4px;
      border-radius: 8px;
      cursor: pointer;
    }
  }

  .search-category {
    position: sticky;
    top: 110px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding-bottom: 40px;
    background-color: none;
    z-index: 1;

    .category-wrap {
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      padding-top: 5%;
      width: 100%;
    }

    .category-container {
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;

      button {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        margin-right: 10px;
        padding: 6px 6px 6px 20px;
        border-radius: 20px;
        background-color: rgb(50, 46, 255);
        cursor: inherit;

        div {
          color: white;
          font-weight: bold;
          font-size: 14px;
          margin-right: 20px;
        }

        p {
          border-radius: 50%;
          font-size: 12px;
          font-weight: 700;
          color: rgb(50, 46, 255);
          background-color: white;
          padding: 4px 8px;
          margin: auto;
        }
      }
    }
  }
  #global-link {
    background-color: ${({ category }) => category === "global-link" && "red"};
  }

  #global-folder {
    background-color: ${({ category }) =>
      category === "global-folder" && "red"};
  }

  #global-tag {
    background-color: ${({ category }) => category === "global-tag" && "red"};
  }
`;
export default Search;
