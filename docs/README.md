# [teacherline-FE-test] ToDoList 구현

**지원자: 김시현**

<p align="center" width: 100%>

 <img src="https://image.rocketpunch.com/company/193966/teacherline_logo_1696730266.jpg?s=400x400&t=inside"  width="50%">

## 🎯 미션해결 여부

### 필수

- [x] 리스트에 할일 추가 ->`ToDoInputForm`을 통해 추가할 수 있습니다.
- [x] 리스트 중 완료한 항목에 대한 체크 기능 -> 체크박스를 클릭하면 완료된 항목이 체크되고, 텍스트에 줄이 그어지도록 구현하였습니다.
- [x] 디자인 시안과 같은 폰트 적용 ->`Ubuntu` 폰트 적용하였습니다.

### 추가

- [x] `전체`, `완료`, `미완료` 상태에따른 할일 목록 정렬 기능

## 🎯 디렉토리 구조

```bash

📦src
 ┣ 📂app
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📜SelectBox.tsx
 ┃ ┣ 📜ToDoInputForm.tsx
 ┃ ┣ 📜ToDoItem.tsx
 ┃ ┗ 📜ToDoList.tsx
 ┣ 📂constants
 ┃ ┗ 📜FILTER_OPTION.ts
 ┣ 📂hooks
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜useCheckbox.ts
 ┃ ┃ ┗ 📜useInput.ts
 ┃ ┗ 📜useTodo.ts
 ┣ 📂styles
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜commonType.d.ts
 ┃ ┃ ┗ 📜theme.d.ts
 ┃ ┣ 📜global.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┗ 📜todo.d.ts
 ┗ 📂utils
 ┃ ┣ 📂provider
 ┃ ┃ ┣ 📜emotion.tsx
 ┃ ┃ ┗ 📜main.tsx
 ┃ ┗ 📜storage.ts

```

## 🎯 주요사항

- `useInput`, `useCheckbox`, `useTodo`와 같은 커스텀 훅을 만들어 상태관리 및 함수제어를 간단하고 효율적으로 처리하고자 하였습니다.
- 피그마 시안에 따라 theme 파일을 생성하고 기존 emotionProvider에 추가하여 일관된 스타일과 디자인을 유지하고자 하였습니다.
- `utils`에 로컬스토리지에서 저장된 할일을 가져오고, 저장하도록 하는 함수를 정의해 새로고침 시에도 데이터가 유지되도록 하였습니다.
- 전체적으로 @emotion/styled를 사용해 스타일링해서 가독성과 재사용성을 높이고자 하였습니다.
- 할일이 없는 경우 맨 화면은 ui적으로 좋지 않은 것 같아 `할일을 생성해보세요`를 넣어주었습니다.

## 😅 기타사항

- next에 익숙하지 않아 디렉토리구조를 전체적으로 어떻게 해야할지 고민하다가 기본적인 구조를 잡았습니다. 앱 라우터는 처음이라 레이아웃같은 걸 더 활용해 볼 수 있었을텐데 과제하면서 많이 아쉬움이 남습니다. 스타일링 시 `const S={}`와 같이 객체를 잡은 이유는 import해오는 기존의 컴포넌트와 현재 컴포넌트에서 작성한 스타일드컴포넌트를 명확히 구분지으면 좋을 것 같다는 생각에 구현하게 되었습니다. 추가 미션으로 체크박스 스타일링과 셀렉트 박스 커스텀을 시간관계 상 하지 못해 아쉬움이 많이 남습니다. 가장 근본적인 미션이지만 수행하면서 한번 더 공부할 수 있었습니다. 감사합니다!
