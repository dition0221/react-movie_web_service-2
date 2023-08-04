# React JS - Movie Web Service-2

### React를 중점적으로 사용해, 영화 웹 서비스를 만듭니다. [2번째]

---

- Code Challenge 및 CSS로 간단히 꾸며보기

노마드 코더 정책 상 강의요약은 괜찮으나, 코드와 필기는 공개적인 곳에 올리면 안 됨.  
필기 요약지는 암호화된 .zip 파일로 저장함.

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
  - _<a href="https://reactunitconverter.dition0221.repl.co/" target="_blank">[Code Challenge] Unit Converter</a>_
