# React JS - Movie Web Service-2

### React를 중점적으로 사용해, 영화 웹 서비스를 만듭니다. [2번째]

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/gh pages-222222?style=flat-square&logo=githubpages&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>

---

**✨ 결과물 : https://dition0221.github.io/react-movie_web_service-2/**

![image](https://github.com/dition0221/dition0221/assets/129196812/fb3e6890-40e0-4ccf-9c62-5324d852ca2c)

> **React**를 사용하고, **RestAPI**로부터 영화 정보를 가져와 화면에 보여주는 '**영화 웹 서비스**'입니다.  
> 각 영화의 포스터, 제목, 설명, 장르 등을 보여줍니다.  
> **반응형 웹 디자인**을 적용해 모바일/태블릿/PC 버전으로 동작합니다.
>
> - RestAPI 로딩 시 '로딩 중'이라고 화면에 표시.
> - 영화 제목을 클릭 시 해당 영화의 상세 페이지로 이동.
> - 우측하단 Anchor버튼을 통해 현재 페이지의 최상단으로 이동.
> - URL 경로 잘못 입력 시 404 페이지 존재.

![image](https://github.com/dition0221/dition0221/assets/129196812/3c22b85d-61bb-4ced-a0d7-d40eadb3db81)

> [ 영화 상세 페이지 ]  
> React-Router를 이용해 각 영화마다 상세 페이지로 이동할 수 있습니다.  
> 해당 영화의 평점, 러닝타임, 줄거리, 영화장르 등을 확인하실 수 있습니다.
>
> - URL 경로가 홈이 아닐 때 우측 하단에 Home으로 가는 버튼 생성.

---

- **23-08-02 : #2.0 ~ #2.6 / JSX**
  - React의 규칙
    1. HTML을 직접 작성하지 않음
    2. JavaScript로 element를 생성한 후, HTML에 element를 배치
    3. 컴포넌트의 첫 글자는 반드시 대문자
  - JSX : JavaScript를 확장한 문법으로, HTML과 비슷한 문법으로 React element를 생성
    - 생성한 React element를 사용하기 위해서는 element를 함수로 선언해야 함
    - root에 배치하기
      1. HTML에서 id="root"인 div 생성
      2. root 생성하기 : const root = ReactDOM.createRoot(document.getElementById("root));
      3. 페이지 렌더링하기 : root.render( ... );
- **23-08-03 : #3.0 ~ #3.9 / useState**
  - state : 데이터가 저장되는 곳
  - React에서 변수를 사용하는 방법 : 중괄호({}) 안에 변수를 사용하면 됨
  - useState : event등으로 state가 업데이트 될 시 자동으로 리렌더링
    - 값으로 2개의 값(데이터 값, 데이터 값을 바꾸는 함수)을 가진 array를 반환
    - shortcut을 사용해 선언하는 것을 권장
    - modifier함수를 사용해 데이터 값을 업데이트하고, 자동으로 리렌더링을 함
      - modifier함수명은 보통 'set데이터명'으로 이름을 지음
      - 다음 state 값이 현재 값을 바탕으로 계산을 할 시 콜백함수를 사용하는 것이 안전함
    - 컴포넌트 함수 내에서 return문 전 부분에서 동작들을 작성
  - React는 오직 바뀐부분만 업데이트 함 (JS는 root부터 해당 element까지 전부 업데이트)
    > ReactJS는 DOM 변경을 처리하기 위해 가상 DOM(Virtual DOM)이라는 개념을 도입합니다.
    > ReactJS에서는 먼저 메모리에 가상 DOM 트리를 생성합니다.
    > 이 트리는 실제 DOM 트리의 사본으로서, 실제 DOM 트리와 별도로 존재합니다.
    > ReactJS는 상태 변경이 발생할 때마다 새로운 가상 DOM 트리를 생성하고, 이전의 가상 DOM 트리와 비교하여 변경된 부분을 파악합니다.
    > 이렇게 파악된 변경 사항만 실제 DOM에 반영하는 방식을 사용합니다.
    > 이 과정을 '재조정(Reconciliation)' 또는 'Diffing'이라고 부릅니다.
    > 가상 DOM을 사용함으로써, 변경이 필요한 최소한의 요소만 실제 DOM에 반영되기 때문에 불필요한 연산을 줄이고 성능을 향상시킬 수 있습니다.
  - JSX 예약어 : 몇몇 예약어는 JS에서 선점하고 있기에, 다른 이름으로 사용하는 속성들이 존재함
  - input 값을 가져오는 방법 : event를 사용해 'event.target.value'값을 참조
- **23-08-04 : #4.0 ~ #5.1 / props & CRA**
  - _<a href="https://reactunitconverter.dition0221.repl.co/" target="_blank">[Code Challenge] 'useState'를 사용한 Unit Converter</a>_
  - props : 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법
    - 컴포넌트 함수의 매개변수(props)를 받아서 사용 가능
      - 어떤 props이든 컴포넌트에 보내면, 컴포넌트(함수)의 첫 번째 인자로 사용
      - props는 첫 번째이자 유일한 인자
      - props의 이름은 마음대로 사용 가능
      - String, Boolean, Function(Event Listener) 등 원하는 데이터타입으로 전달 가능
    - React가 자동으로 모든 props를 하나의 object로 전달함
      - 보통 ES6 구문을 사용해 shortcut으로 사용
    - JS의 문법으로 props를 받을 때, 기본값을 지정할 수 있음
  - memo : 부모 컴포넌트에서 props가 변경되지 않는 하에 자식 컴포넌트를 리렌더링 할지 말지 결정할 수 있음
    - props가 변경되지 않는다면, 리렌더링할 필요가 없다는 것을 알려주는 것
      - 원래 state가 변경되면, 모든 자식 컴포넌트는 리렌더링이 일어남
      - 변경되지 않는 자식 컴포넌트는 제외하고, 변경되는 자식 컴포넌트만 리렌더링을 하도록 하는 기능
    - 기본형 : const 새컴포넌트명 = React.memo(기존컴포넌트명);
  - Prop Types : 어떤 데이터타입의 prop을 받고 있는지 체크를 해줌
    - React에게 컴포넌트의 prop들의 데이터타입이 무엇인지 알려줘야 함
    - 패키지 : 'prop-types'
    - 기본형 : 컴포넌트명.propTypes = { 프로퍼티명: PropTypes.데이터타입 }
    - 데이터타입 뿐만 아니라, 더 많은 기능을 제공함
      - 필수 요소, 목록 중 하나의 값만 받도록 지정 등
  - Create React App : React App을 만드는 방법
    - 설치법 : Node.js와 npx 설치 필요 / 'npx create-react-app 폴더명'
    - 사용법
      1. 'npm start'로 개발환경 시작
      2. 'src/index.js'파일은 'public/index.html'파일에 넣도록 설정되어있음
      3. 기본코드를 제외하고 삭제, 파일 삭제 및 정리하기
  - 컴포넌트 CSS
    - CSS module : 특정 컴포넌트를 위한 CSS 파일을 만들 수 있음
      - 파일명 : 컴포넌트명.module.css
      - 컴포넌트파일에 CSS를 import하여 사용
      - CSS파일에서 여러 class명으로 만든 후, 컴포넌트에서 해당 class명을 골라서 사용 가능
      - React는 랜덤한 class를 가지므로, 프로젝트 전체의 class명을 기억할 필요가 없으며, CSS파일의 동일한 class명을 다른 CSS파일 내에서도 사용 가능
- **23-08-05 : #6.0 ~ #6.4 / useEffect**
  - useEffect : 특정 코드가 언제 실행될지 결정하는 방법
    - 기본형 : useEffect(콜백함수, [state값]);
      - 2개의 인자를 가짐
      1. 첫 번째 인자 : 실행할 특정 코드
      2. 두 번째 인자 : [배열] 주시할 state값
    - 주시하는 state값이 변화할 때에만 콜백함수를 실행
      - state값이 없고, 빈 배열로 사용 시 첫 render 시에만 코드를 실행함
        - 기본적으로 컴포넌트는 re-render 시 코드가 모두 다시 실행됨
        - 'useEffect'를 사용하면 re-render 시 코드를 실행하지 않음
      - 배열로 사용하기 때문에 여러 state값을 넣어줄 수 있음
        - 그 중 하나의 값만 변해도 'useEffect'가 실행됨
  - cleanup function : 컴포넌트가 destroy될 시 특정 코드를 실행할 수 있는 기능
    - 'useEffect'의 콜백함수에서 return문에 콜백함수를 사용해 작성
- **23-08-07 : #7.0 ~ #7.2 / use RestAPI**
  - array인 state값을 수정하는 방법
    - modifier 함수를 사용해 state값을 수정해야하므로, '.push()' 등을 사용해 state값을 직접적으로 수정 불가능
    - '나머지연산자(...)'를 사용해 배열에 값을 추가 가능
    - '.map()' 메서드를 사용해 새로운 배열 생성 가능
      - 화면에 배열을 사용한 list를 보여주기 가능
- **23-08-08 : #7.3 ~ #7.5 / Router**
  - _<a href="https://replit.com/@dition0221/React-Coin-RestAPI" target="_blank">[Code Challenge] 'RestAPI'를 사용한 가상화폐 리스트</a>_
  - React Router
    - 패키지 : 'npm i react-router-dom'
    - 설정법
      1. 'src' 폴더 내에 'routes' 또는 'pages' 폴더 생성하기
      2. 해당 폴더에 routing 할 컴포넌트 생성하기
      3. Router 설정하기
         - 'App.js'에서 router를 render하도록 설정
           &lt;BrowserRouter&gt;
           &nbsp;&nbsp;&lt;Routes&gt;
           &nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="경로" element={&lt;컴포넌트 /&gt;} &gt;
           &nbsp;&nbsp;&lt;/Routes&gt;
           &lt;/BrowserRouter&gt;
    - 다른 Route로 이동하는 방법
      - 기본형: &lt;Link to="경로"&gt;링크명&lt;/Link&gt;
      - 브라우저 새로고침 없이 다른 페이지로 이동시켜줌
      - HTML &lt;a&gt;태그를 사용하지 않음 (페이지 전체가 새로고침되기 때문)
- **23-08-09 : #7.6 ~ #7.10 / useParams & Deploy**
  - URL에 동적 parameter 사용하는 방법
    - Route 설정에서 URL 경로에 ':파라미터명'으로 사용
    - 'useParams()' 함수를 이용해 parameter를 객체로 받아올 수 있음
  - 배포(Publish/Deploy)
    - 'gh-pages' 패키지 : 결과물을 github pages에 업로드할 수 있게 해주는 패키지
      - 설치법 : 'npm i gh-pages -D'
      - 'React-Router' 버전6 이상으로 사용 시 &lt;BrowserRouter /&gt;에 'basename={process.env.PUBLIC_URL}' 속성을 추가해야 함
    - 배포법
      1. build 하기 : 'npm run build'로 build 폴더가 생성됨
      2. 배포할 곳의 홈페이지 URL 입력하기
      - 'package.json'에서 'homepage'프로퍼티를 생성
      3. deploy 하기 : 'deploy' script를 생성
      - ex. "deploy": "gh-pages -d build"
      - build 후 deploy 하는 것을 간단히 하기 위해 'predeploy' script를 생성
        - ex. "predeploy": "npm run build"
        - 'npm run deploy' 실행 시 Node.js가 자동으로 predeploy를 먼저 실행함
- **23-08-10 : CSS & Deploy**
  - 반응형 웹 구현 (768/1024px 기준으로 모바일/태블릿/PC버전)
  - github pages는 SPA(Single Page Application)을 지원하지 않는 것을 지원하도록 수정
    - <a href="https://velog.io/@summereuna/gh-pages%EC%97%90%EC%84%9C-CRA%EB%A1%9C-%EB%B9%8C%EB%93%9C%ED%95%9C-React-AppSPA-%ED%98%B8%EC%8A%A4%ED%8C%85-%ED%95%98%EA%B8%B0">[참고 문서]</a>

---

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.
