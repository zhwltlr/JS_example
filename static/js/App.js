/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { render } from '@testing-library/react';

function App() {

  let [title,titlechange] = useState(['ITZY 공식 MIDZY 2기 모집','MINI ALBULM "CHECKMATE"발매', 'ITZY WORLD TOUR 일정','예지 생일기념 YOUTUBE LIVE', '1ST 팬미팅 이벤트 당첨자 안내'])
  let [like, likechange] = useState(16);
  // let [like, likechange] = useState([0,0,0]); 이렇게도 가능
  let [like1, likechange1] = useState(21);
  let [like2, likechange2] = useState(22);
  let [like3, likechange3] = useState(10);
  let [like4, likechange4] = useState(15);
  let [modal,modalchange] = useState(true);
  let [rename, renamechange] = useState(0);
  let [ input, inputchange ] = useState(''); 

  function 가나다순(){
    var newArray2 = [...title];
    newArray2.sort();
    newArray2.sort((a,b)=> a-b)
     titlechange(newArray2);
  }

  return (
    <div className="App">
      <div className='black-nav'>
          <div>ITZY FAN COMMUNITY</div>
      </div>
      <button onClick={가나다순}>가나다순 정렬</button>

      {/* 글 list - like +1씩 증가할 수 있도록 설정 */}
      <div className='list'>
        <h3> {title[0]} <span onClick={()=>likechange(like+1)}>👍</span> {like}</h3>
        <p>4월 17일 발행</p>
        <hr />
      </div>

      <div className='list'>
        <h3> {title[1]} <span onClick={()=>likechange1(like1+1)}>👍</span> {like1} </h3>
        <p>5월 26일 발행</p>
        <hr />
      </div>

      <div className='list'>
        <h3> {title[2]} <span onClick={()=>likechange2(like2+1)}>👍</span> {like2} </h3>
        <p>6월 5일 발행</p>
        <hr />
      </div>

      <div className='list'>
        <h3> {title[3]} <span onClick={()=>likechange3(like3+1)}>👍</span> {like3} </h3>
        <p>7월 21일 발행</p>
        <hr />
      </div>

      <div className='list'>
        <h3 onClick={()=>modalchange(!modal)}> {title[4]} <span onClick={()=>likechange4(like4+1)}>👍</span> {like4} </h3>
        <p>12월 9일 발행</p>
        <hr />
      </div>


      <div className='publish'>
        <input onChange={(e)=>{inputchange(e.target.value)}}/>
        <button onClick={()=>{
            var arrayCopy = [...title];
            arrayCopy.unshift(input);
            titlechange(arrayCopy);
        }}>저장</button>
      </div>  



      { 
        modal === true 
        ? <Modal title = {title} rename = {rename}></Modal>
        : null
      }
      <button onClick={()=>{renamechange(0)}}>내용1</button>
      <button onClick={()=>{renamechange(1)}}>내용2</button>
      <button onClick={()=>{renamechange(2)}}>내용3</button>
      <button onClick={()=>{renamechange(3)}}>내용4</button>
      <button onClick={()=>{renamechange(4)}}>내용5</button>

      <button onClick={()=>{modalchange(!modal)}}>닫기</button>

    </div>
  );




  
}

// modal 창을 통해 제목과 내용 미리보기 구현
function Modal(props) { 
  return (
    <div className='modal'>
          <h2>{props.title[props.rename]}</h2>
          <p>미리보기 화면입니다.</p>
          <button>상세내용 보러가기</button>
        </div>
  )
}



export default App;
