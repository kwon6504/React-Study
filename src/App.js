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

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  
  function 함수() { //긴 코드를 한 단어로 묶어주는 문법, () => {} 함수 만드는 다른 방식
    console.log(1);
  }

  let arr = [1, 2, 3];
  // array/object 담은 변수엔 화살표만 저장됨

  //동적인 UI만드는 방법
  //1.html css로 미리 UI디자인을 다 해놓고
  //2.UI의 현재 상태를 state로 저장해두고
  //3.state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성
  let [modal, setModal] = useState(false);

  //map함수(모든 array 뒤에 붙일수 있다.)
  //1.array 자료 갯수만큼 함수안의 코드 실행해줌
  //2.함수의 파라미터는 array안에 있던 자료가된다.
  //3.return에 뭐 적으면 array로 담아준다.
  // [1,2,3].map(function(){
  //   return '112233';
  // })

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ color: 'red', fontSize: '16px' }}>블로그임</h4>
      </div>

      {/* 내가 작성한 숙제 답변 sort = 정렬함수, localeCompare = 문자열 비교함수 */}
      <button onClick={() => {
        let sortkr = [...글제목].sort((a, b) => a.localeCompare(b, 'ko-KR'));
        글제목변경(sortkr);
      }}>가나다순정렬</button>

      {/* 코딩애플 답변
       <button onClick={() => {
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

      {/* <div className='list'>
        <h4>{글제목[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
         state 변경하는 법(등호로 변경금지)
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      { //{a} or 글제목[i]는 같다 i는 array만큼 도는 숫자
      //(참고2) 반복문으로 html 생성하면 key={html마다 다른 숫자}를 추가해야한다.
        글제목.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(!modal) }}>{글제목[i]}
                <span onClick={() => { 
                  let up = [...따봉];
                  up[i] = up[i]+1;
                  따봉변경(up);
                 }}>👍</span>{따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        // if같은 자바 문법 사용불가 대신 삼항연산자 사용가능(ternary operator)
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal color="skyblue" 글제목={글제목} 글제목변경={글제목변경}></Modal> : null
      }

    </div>
  );
}

{/* 컴포넌트(Component) 만드는법
      1. function만들고
      2. return() 안에 html 담기
      3. <함수명></함수명>쓰기
      컴포넌트 사용하기좋을때
      1. 반복적인 html 축약할 때
      2. 큰 페이지들
      3. 자주변경되는 것들
    컴포넌트 단점 : state 가져다쓸 때 문제생김(A함수에 잇던 변수는 B함수에서 맘대로 가져다 쓸 수 없음)*/}
// props문법 = 부모>자식 state 전송하는 문법
//1.<자식컴포넌트 작명={state이름}>
//2.props 파라미터 등록 후 props.작명 사용
//props 전송은 부모 > 자식 만 가능, 컴포넌트 많아지면 props 쓰는게 귀찮아짐
function Modal(props) {
  return (
    //의미 없는 div 만들기 싫을때 <></>사용가능하다 
    <>
      <div className='modal' style={{background : props.color}}>
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy = [...props.글제목];
          copy[0] = '여자 코트 추천';
          {props.글제목변경(copy)};
        }}>글수정</button>
      </div>
    </>
  );
}

// (참고) 컴포넌트 만드는 문법 2
// let 보다 const를 많이 사용한다.
// let Modal = () => {
//   return(
//     <div>
//     </div>
//   );
// };

export default App;
