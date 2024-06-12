/* eslint-disable */ //Lint 끄는 기능

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // let [글제목, b] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [글제목, b] = useState('남자 코트 추천');
  // 글제목 = state에 보관했던 자료, b = state 변경을 도와주는 함수.
  // state쓰던 html은 자동 재렌더링 됨, 자쥬 변경될것같은 html부분은 state로 만들어주는 것이 좋다.
  let [글제목1, b1] = useState('강남 우동 맛집');
  let [글제목2, b2] = useState('파이썬독학');

  // let [a, c] = [1, 2];
  // let num = [1, 2];
  // let a = num[0]; 
  // let c = num[1];
  //Destructuring 문법 = a,c와 1,2를 맞춰주는 문법 어레이 안에 있던 함수를 각각 변수로 빼주는 문법

  let [따봉 , 따봉변경] = useState(0);

  function 함수(){ //긴 코드를 한 단어로 묶어주는 문법, () => {} 함수 만드는 다른 방식
    console.log(1);
  }

  return (
    <div className="App">
     <div className='black-nav'>
      <h4 style={{color : 'red', fontSize : '16px'}}>블로그임</h4>
     </div>
     <div className='list'>
      <h4><span onClick={()=>{b('여자 코트 추천')}}>{ 글제목 }</span><span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
       {/* state 변경하는 법(등호로 변경금지) */}
      <p>2월 17일 발행</p>
     </div>
     <div className='list'>
      <h4>{ 글제목1 }</h4>
      <p>2월 17일 발행</p>
     </div>
     <div className='list'>
      <h4>{ 글제목2 }</h4>
      <p>2월 17일 발행</p>
     </div>
    </div>
  );
}

export default App;
