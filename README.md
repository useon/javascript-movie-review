# javascript-movie-review

## 1단계 - 영화 목록 불러오기 🎞

- 영화 목록 조회 (인기순)

  - [x] 영화 목록의 1페이지를 불러온다 (더보기 버튼을 누르면 추가 불러 올 수 있다)
  - [x] TMDB에서 인기순으로 정렬된 데이터를 제공받아 인기순 목록을 출력한다.
  - [x] 한 페이지당 20개씩 영화 목록을 보여준다.
  - [x] 로딩 가능한 마지막 페이지에 도달한 경우, 더보기 버튼을 없애고 마지막 페이지임을 안내한다.

- 검색

  - [x] 영화 검색 API를 이용하여 내가 보고 싶은 영화를 검색할 수 있다.
  - [x] 영화 목록 조회와 같이 검색한 결과에 한해 정보를 보여주는 화면의 요구사항은 영화 목록 조회 화면과 동일

- 오류
  - [x] 오류가 발생하는 경우, 사용자를 위한 오류 화면을 보여준다.

### 컴포넌트

- [x] MovieReviewHeader

  - 영화 리뷰 사이트의 헤더 컴포넌트
  - 영화 리뷰 로고와 영화 검색창을 가지고 있다.

- [x] MovieSearchInput

  - 영화 검색 컴포넌트
    - 엔터 키와 검색 버튼을 이용하여 검색할 수 있다.

- [x] MovieList
- 사용자 요청에 따른(지금 인기있는 영화 목록, 검색한 영화 목록) 영화 목록들을 보여주는 컴포넌트
- 각 영화 아이템을 포함한다.

- [x] MovieItem

  - 영화 정보를 보여주는 컴포넌트
  - 영화 포스터, 영화 제목, 별점을 포함한다.

- [x] MoreMoviesButton

  - 클릭 시 영화 목록 하단에 새 페이지(영화 20개 정보)를 추가한다.
  - 페이지 끝에 도달한 경우 더보기 버튼을 화면에 출력하지 않는다.

- [x] MovieModal
  - 영화 아이템을 클릭시 모달을 확인할 수 있다.
  - 영화 모달에는 영화 제목, 영화 포스터, 영화 장르, 영화 평점, 영화 줄거리를 API를 이용하여 받아와서 보여준다.
  - 영화 모달에는 로컬스토리지에서 내가 매긴 별점 데이터를 가져와 보여주고, 새로 별점을 매길 수 있다.

## 2단계 - 상세 정보 & UI/UX 개선하기 🎞

- 영화 상세 정보

  - [x] 영화를 누르면 해당 영화의 상세 정보를 확인할 수 있다.
  - [x] 영화의 별점을 매길 수 있다.
  - [x] 매긴 별점을 확인할 수 있다.
  - [x] 모달은 닫기 버튼, 모달 밖 영역, esc 키를 누르면 닫을 수 있다.

- 무한스크롤
  - [x] 데이터가 있을 때, 스크롤하면 데이터를 추가로 보여준다.
