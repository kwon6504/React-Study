/* eslint-disable */ //Lint 끄는 기능

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학'])
  // let [글제목, 글제목변경] = useState('남자 코트 추천');
  // 글제목 = state에 보관했던 자료, 글제목변경 = state 변경을 도와주는 함수.
  // state쓰던 html은 자동 재렌더링 됨, 자쥬 변경될것같은 html부분은 state로 만들어주는 것이 좋다.
  // let [글제목1, b1] = useState('강남 우동 맛집');
  // let [글제목2, b2] = useState('파이썬 독학');

  // let [a, c] = [1, 2];
  // let num = [1, 2];
  // let a = num[0]; 
  // let c = num[1];
  //Destructuring 문법 = a,c와 1,2를 맞춰주는 문법 어레이 안에 있던 함수를 각각 변수로 빼주는 문법

  let [따봉, 따봉변경] = useState(0);

  function 함수() { //긴 코드를 한 단어로 묶어주는 문법, () => {} 함수 만드는 다른 방식
    console.log(1);
  }

  let arr = [1, 2, 3];
  // array/object 담은 변수엔 화살표만 저장됨

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ color: 'red', fontSize: '16px' }}>블로그임</h4>
      </div>

      <button onClick={() => {
        let sortkr = [...글제목].sort((a, b) => a.localeCompare(b, 'ko-KR'));
        글제목변경(sortkr);
      }}>가나다순정렬</button>

      {/* <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}> 정렬버튼 </button> */}

      <button onClick={() => { //기존거state == 신규state의 경우 변경안해줌
        let copy = [...글제목]; //...괄호를 나오게 한후 변경해달라는
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      {/* <button onClick={()=>{글제목변경('여자 코트 추천')}}>글수정</button> */}

      <div className='list'>
        <h4>{글제목[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        {/* state 변경하는 법(등호로 변경금지) */}
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
