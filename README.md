![CONDIBOOK (1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e490c86c-aa8a-4e8e-b72d-ce39d96289e9/CONDIBOOK_(1).png)

# 👇목차

✨ [서비스 시연 영상 및 배포 주소](https://www.notion.so/CONDIBOOK-06c3e84280d643e59f4b1c67ae1c277f)

🔗 [GitLab & GitHub 링크](https://www.notion.so/CONDIBOOK-06c3e84280d643e59f4b1c67ae1c277f)

1. [서비스 소개](https://www.notion.so/CONDIBOOK-06c3e84280d643e59f4b1c67ae1c277f)
2. [기술 스택](https://www.notion.so/CONDIBOOK-06c3e84280d643e59f4b1c67ae1c277f)
3. [서비스 기능](https://www.notion.so/CONDIBOOK-06c3e84280d643e59f4b1c67ae1c277f)
4. [프로젝트 구성도](https://www.notion.so/CONDIBOOK-06c3e84280d643e59f4b1c67ae1c277f)
5. [트러블 슈팅](https://www.notion.so/CONDIBOOK-06c3e84280d643e59f4b1c67ae1c277f)

---

# ✨ 서비스 시연 영상 및 배포 주소

[ezgif.com-gif-maker (5).mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7dc64578-76ba-47e3-93f7-a06749c41a99/ezgif.com-gif-maker_(5).mp4)

👇 **배포 주소**

[CondiBook](https://condibook.site/)

- 배포서버는 Vultr를 이용 중입니다.

[SSD VPS Servers, Cloud Servers and Cloud Hosting](https://www.vultr.com/)

# 🔗 GitHub 링크

**👇 GitHub 링크**

[GitHub - condi-book/condibook: bookmark-share-service](https://github.com/condi-book/condibook)

---

# 1. 서비스 소개

![파이널-프로젝트-003.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a7c1510-80e6-4caf-90fd-e5814f79f44b/파이널-프로젝트-003.png)

***: 당신의 편리한 북마크***

## ❗ 목표

<aside>
💡 AI를 활용한 편리한 북마크 관리 및 북마크 공유 서비스

</aside>

- 양질의 정보가 담긴 다른 사람들의 북마크를 보고 싶은 사용자
- 공유된 링크를 한 곳에서 관리해서 능률을 높이고 싶은 사용자
- 북마크를 빠르고 편하게 정리하고 싶은 사용자

> 북마크의 한정된 기능으로 느꼈던 불편함을 ***Condibook***으로 해결하세요!
> 

## ❓ 기획 의도

### 🟦 눈에 띄지 않는 **서포터**, 북마크

- 북마크는 필요한 정보를 선별하여 습득할 수 있는 유용한 도구입니다.
- [MS 블로그](https://www.microsoft.com/insidetrack/blog/internal-search-bookmarks-boost-productivity-at-microsoft/) 에 의하면 사내 북마크 검색으로 27배의 시간 절약한 효과를 경험했다고 합니다.
- 사용자들은 브라우저 북마크 기능에 만족하지 않고, 편리한 정리와 공유 기능을 가진 북마크 서비스를 찾고 있습니다.

### 🟪 북마크 **발전 포인트**

- 북마크 대충 저장해서 다시 찾기 어려운 경우
- 양질의 콘텐츠를 빠른 시간에 찾고 싶은 경우
- 협업 때 공유한 링크를 찾는데 시간을 지체하는 경우

### 🟥 Condibook이 제시한 방법

- ⚡️ 15개의 카테고리로 AI가 사이트를 분류하여 추천
- 👀 커뮤니티로 다른 사람들의 북마크 조회
- 📚 팀 북마크 관리로 흩어진 링크들을 폴더로  관리

---

# 2. 기술 스택

<aside>
💁 **토글 (삼각형 모양)** 을 클릭하면 해당 기술 스택의 자세한 내용을 확인 하실 수 있습니다.

</aside>

## 💻 Frontend

- `**React**`
    
    <aside>
    💬 : 컴포넌트 재사용 등으로 인한 
    유지보수가 쉽고 프론트엔드 웹 프레임 워크 중에서 가장 커뮤니티 활성화가 잘 되어있음
    
    </aside>
    
- `**TypeScript**`
    
    <aside>
    💬 : 타입을 적어 줌으로써 Props, 
    API연결에서 생기는 타입에러를 미리 막을 수 있음
    
    </aside>
    
- `**Styled-components**`
    
    <aside>
    💬 : CSS in JS 로 관리 용이 및 자유로운 커스텀과 props로 스타일 구분 가능
    
    </aside>
    
- `**React-bootstrap**`
    
    <aside>
    💬 : 간단한 사용방법으로 다양한 컴포넌트를 사용 가능
    
    </aside>
    
- `**Amazon S3**`
    
    <aside>
    💬 : 이미지 업로드를 base64가 아닌 URL방식으로 s3에서 가져올 수 있도록 하였다.
    
    </aside>
    
- `**Axios**`
    
    <aside>
    💬 : 브라우저 호환성 과 편의성을 제공
    
    </aside>
    

## 💾 Backend

- `**Node.js & Express**`
    
    <aside>
    💬 : JS로 구축 가능한 서버 중 가장 대중적이고 쉬우며 유연한 웹 프레임워크 서버 조합
    
    </aside>
    
- `**JWT**`
    
    <aside>
    💬 : 토큰 자체에 정보가 있으므로 별도의 인증 저장소가 필요 없는 편리성과 여러 디바이스에서 사용 가능한 호환성을 제공하는 토큰
    
    </aside>
    
- `**Sequelize**`
    
    <aside>
    💬 : DBMS에 대한 종속성이 줄어 재사용 및 유지보수의 편리성이 증가하고 객체 지향적 코드로 더 직관적이고 비즈니스 로직에 더 집중 가능함
    
    </aside>
    
- `**docker**`
    
    <aside>
    💬 : 컨테이너로 구분된 개발과 배포 환경으로 인해 독립된 개발환경을 보장하며 kernel이 포함되어 있지 않아 비교적 크기가 작으므로 좀 더 신속한 배포가 가능
    
    </aside>
    
- `**MySQL**`
    
    <aside>
    💬 : NoSQL 대비 SQL은 RDBMS 사용 가능하며 엄격한 스키마와 관계를 통해 좀 더 복잡한 관계일 경우 수정이 좀 더 용이 한 장점이 있음, SQL 중 가장 대중적인 MySQL을 사용
    
    </aside>
    
- `**Amazon RDS**`
    
    <aside>
    💬 : 대규모 관계형 데이터베이스 관리를 간편하게 클라우드에서 설정 및 운영이 가능 하도록 지원하는 서비스를 제공하여 MySQL의 RDBMS와 호환해 사용
    
    </aside>
    
- **`aws ec2`**
    
    <aside>
    💬 : 하드웨어에 선 투자할 필요가 없어 더 빠르게 애플리케이션을 개발하고 배포 가능
    
    </aside>
    
- `**Logstash**`
    
    <aside>
    💬 : Elasticsearch와의 긴밀한 통합, 강력한 로그 처리 능력, 사전 구축된 200개 이상의 오픈 소스 플러그인을 통해 데이터 인덱싱을 돕는 Logstash는 Elasticsearch에 데이터를 로드할 때 가장 많이 사용
    
    </aside>
    
- `**ElasticSearch**`
    
    <aside>
    💬 : HTTP 웹 인터페이스와 스키마에서 자유로운 JSON 문서와 함께 분산 멀티테넌트 지원 전문 검색 엔진을 제공
    
    </aside>
    

## 🤖 AI

- `**Flask**`
    
    <aside>
    💬 : AI 서버를 배포하기 위한 용도. 모델 자체에서 나온 정보를 재 가공하기 위해 사용
    
    </aside>
    
- `**Word2vec**`
    
    <aside>
    💬 : 주어진 예비 키워드들로부터 설명과의 유사성을 측정하기 위한 모델 (메인 모델)
    
    </aside>
    
- `**Googletrans**`
    
    <aside>
    💬 : input에서 한국어가 아닌 다른 언어가 들어갔을 때 번역을 위해 사용
    
    </aside>
    
- `**Konlpy**`
    
    <aside>
    💬 : googletrans와 동시에 input 값으로부터 keyword 명사를 추출해주기 위해 사용
    
    </aside>
    
- `**Regex**`
    
    <aside>
    💬 : 데이터를 전처리 및 input 값의 불용어들을 제거해주기 위해 사용
    
    </aside>
    

## 🌐 배포

- `**Nginx**`
    
    <aside>
    💬 : HTTPS를 적용하고, 서버 분기를 위해 사용
    
    </aside>
    
- `**Docker, Docker-compose**`
    
    <aside>
    💬 : 리눅스 서버에 간편하고 가볍게 배포하기 위해 사용
    
    </aside>
    

---

# 3. 서비스 기능

## ⚛ 크롬 확장 프로그램

---

: 사용자의 편의성을 고려하여 북마크 할 페이지에서 버튼 클릭 시 해당 URL에 대한 meta 정보를 기준으로 사용자에게 AI 추천 카테고리 제공

- **세부 기능**
    - 대부분의 url에서 AI를 통한 **15개**의 카테고리 별 폴더 추천 기능 제공
    - 저장 폴더를 직접 입력 하거나 이미 저장된 카테고리로도 저장 가능
    - 북마크 저장 시 해당 페이지로 이동하여 확인 가능
    - 크롬 확장 프로그램 다운로드 링크
        
        [Chrome 웹 스토어](https://chrome.google.com/webstore/search/condibook?hl=ko)
        

![ezgif.com-gif-maker (14).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/887a0c58-b088-4982-978c-9268245c9ff3/ezgif.com-gif-maker_(14).gif)

## ⚛ 메인 페이지

---

: 서비스와 관련된 정보 제공, 실 서비스 이용 페이지와 연결해주는 페이지

- **세부 기능**
    - CondiBook 서비스 및 개발자 소개
    - 크롬 확장 프로그램
        - 클릭 시 크롬 웹 스토어 새 탭 이동
    - 로그인 / 회원가입
        - 클릭 시 소셜 로그인 (구글 & 카카오) 페이지로 이동
        - 이미 로그인한 유저의 경우, 클릭 시 마이 페이지로 이동
    

![ezgif.com-gif-maker (5).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4a080b7-30cf-4b29-965a-fd7a13345f21/ezgif.com-gif-maker_(5).gif)

## ⚛ 프로필 창

---

- 사용자 정보 확인
- 수정 버튼 클릭 시 닉네임 설정 및 프로필 소개글 입력 기능
- 로그아웃 기능

![ezgif.com-gif-maker (9).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d44fac2a-5fd2-42f7-8a13-b114093d7ccd/ezgif.com-gif-maker_(9).gif)

## ⚛ 나의 북마크 페이지

---

:  나의 북마크, 폴더 관리 및 북마크 상세 정보 제공 페이지

- **세부 기능**
    - 북마크 폴더 생성 & 수정 & 삭제 & 즐겨찾기 기능
    - 북마크 추가 & 정렬(드래그 앤 드랍) & 이동 & 삭제 기능
    - 미리보기(iframe) 기능
        - 미리보기가 불가능한 url일 경우 `**새탭으로 열기**` 버튼 클릭 시  볼 수 있음
    - 스크랩한 북마크 탭에서 좋아요한 게시글  모아보기 기능

![ezgif.com-gif-maker (8).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b23b4253-a0c1-4002-8f50-df95d1533f9e/ezgif.com-gif-maker_(8).gif)

![ezgif.com-gif-maker (11).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7b2c24a-1b42-4137-9a06-acb019e7b27a/ezgif.com-gif-maker_(11).gif)

## ⚛ 커뮤니티 페이지

---

: 다양한 사용자가 제공하는 북마크 정보를 확인하고 서로 공유하는 페이지

- **세부 기능**
    - 게시글 상세 정보 확인
    - 게시글 추가 & 수정 & 삭제 기능
    - 좋아요 기능
    - 댓글 추가 & 수정 & 삭제 기능
    - 조회수, 좋아요, 최신순 정렬 기능
    - 북마크 첨부 기능 (10개 제한)
    - Markdown 문법 제공
    - 링크 클립보드 복사 기능
        - 오른쪽 아래 추가 버튼 클릭하여 링크 클립보드 붙여넣기 기능
        - 나의 북마크에 해당 링크 추가 기능 ( + **AI 폴더 추천 기능**)
    - 미리보기(iframe) 기능
        - 미리보기가 불가능한 url일 경우 `**새탭으로 열기**` 버튼 클릭 시  볼 수 있음
    - 검색 기능
        - 제목 + 내용

![ezgif.com-gif-maker (13).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e6c1a7f0-a680-4331-82ff-e968ec14c3df/ezgif.com-gif-maker_(13).gif)

## ⚛ 그룹(팀) 북마크 페이지

---

:  그룹(팀)별로 그룹, 북마크, 폴더 관리 및 북마크 상세 정보 제공 페이지

- **세부 기능**
    - 그룹 생성 및 그룹 간 북마크 공유 기능
    - 그룹(팀) 생성, 정보 수정 기능
    - 유저 정보 확인
    - 매니저 권한 기능
        - 그룹(팀) 관리가 원활하게 이루어지게 하기 위함
        - 유저 초대 및 추방 기능
        - 폴더 및 북마크 삭제 기능
    - 북마크 폴더 생성 & 수정 & 즐겨찾기 기능
    - 북마크 추가 & 정렬(드래그 앤 드랍) & 이동
    - 미리보기(iframe) 기능
        - 미리보기가 불가능한 url일 경우 `**새탭으로 열기**` 버튼 클릭 시  볼 수 있음

![ezgif.com-gif-maker (10).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ad3b32c-7650-4f51-9576-c7d8df3590d5/ezgif.com-gif-maker_(10).gif)

## ⚛ 통합 검색 페이지

---

: 커뮤니티 게시판, 나의 폴더, 팀 폴더에 대한 통합 검색 기능 제공 페이지

- **세부 기능**
    - 나의 북마크 페이지, 그룹 북마크 페이지에 오른쪽 하단의 검색 버튼 클릭 시 나타남
    - 필터 기능 (전체, 내 폴더, 팀 폴더)
    - 검색 결과 선택 시 해당 상세 페이지로 이동

![ezgif.com-gif-maker (12).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22052939-2181-481b-bc7f-4f8ef5b1b412/ezgif.com-gif-maker_(12).gif)

## ⚛ 설정 창

---

- 크롬 확장프로그램 다운로드 클릭 시 크롬 웹스토어로 이동
- 로그아웃 버튼 클릭 시 메인페이지로 이동

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3b1837b2-d109-4d0f-935b-954ad46e3849/Untitled.png)

---

# 4. 프로젝트 구성도

<aside>
💁 해당 자료를 클릭하면 자세한 내용을 확인 하실 수 있습니다.

</aside>

[제목 없음](https://www.notion.so/0ea42995ca914db187e47a4b8ac3699f)

---

# 5. 트러블 슈팅

[제목 없음](https://www.notion.so/374104794ce643bf9ff03324d37cf44e)
