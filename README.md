## Wetyle Share 프로젝트 Front-End 소개

- 10~20대 여성 및 10대 학생들을 주요 고객으로 가진 SNS & 커머스 서비스 [스타일쉐어](https://www.styleshare.kr/) 클론 프로젝트

### 개발 인원 및 기간

- 개발기간 : 2020/2/23 ~ 2020/3/6
- 개발 인원 : 프론트엔트 4명, 백엔드 2명
- [백엔드 github](https://github.com/wecode-bootcamp-korea/wetyle-share-backend)

### 목적

주변 개발자분들에게서 SNS와 커머스 서비스를 경험하면 백엔드가 지녀야할 역량을 많은 부분 갖출 수 있다고 들었고, 이 두 가지 요소를 모두 담고 있는 스타일쉐어를 분석하고 주요 기능을 클론함으로써 이를 이루고자 함

### 데모 영상(이미지 클릭)

[![위타일 미리보기](http://img.youtube.com/vi/Wd_x8jr5elM/0.jpg)](https://youtu.be/Wd_x8jr5elM)

[![위타일 추가자료](http://img.youtube.com/vi/2-BrM4u5q3s/0.jpg)](https://youtu.be/2-BrM4u5q3s)

<br/>

## 적용 기술 및 구현 기능

### 적용 기술

- React.js
- RESTFul API
- CRA
- 다양한 라이브러리(Slick, Modal 등)

</br>

### 구현 기능

#### 공통

- 일반 회원가입 / 로그인
- 카카오 소셜 로그인
- AWS EC2에 서버 배포
- 정규식을 이용한 이메일 검사

</br>

#### OOTD(SNS 섹션)

- 카드 리스트 뿌리기(카테고리별 다른 기준을 가짐) - 인기, 최신, 팔로잉
- 스타일 카드 내부 요소 구현 - 모달로 구현
- 스타일 카드 안 좋아요, 팔로우, 댓글 추가 기능 구현
- 스타일 및 컬렉션 업로드 기능 구현(컬렉션은 페이지를 구현하지 못해 API 적용 실패)
- 무한스크롤 기능으로 아이템 계속 가져오기

</br>

#### STORE(커머스 섹션)

- 상품 상세페이지 좋아요버튼
- STORE 메인에 브랜드 및 상품정보 등 불러오기
- 카테고리 클릭 시 하단바 애니메이션 및 이미지 슬라이드 애니메이션 구현
- 상품 선택시 수량체크 및 가격 결정, 할인률 포함
- 상품 좋아요 버튼 구현

</br>

### 정리

**미구현**

- 상품 결제 API
- 장바구니 기능
- 마이페이지
- 기획전 및 브랜드 페이지

**추후에 계속 수정해 나갈 예정**
