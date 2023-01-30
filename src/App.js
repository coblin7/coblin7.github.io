/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  //////////////////////////////////////////////////////////////////
  /**
   * state
   */
  let [boardList, setBoardList] = useState(
    [
      {"subject": "게시글1", "date": "2023-01-25", "like": 0},
      {"subject": "게시글2", "date": "2023-01-26", "like": 0},
      {"subject": "게시글3", "date": "2023-01-27", "like": 0},
    ]
  );

  let [modalState, setModalState] = useState(false);
  let [inputValue, setInputValue] = useState('');

  //////////////////////////////////////////////////////////////////
  /**
   * function
   */
  function orderByDesc() {
    let copy = [...boardList];
    copy = copy.sort((a,b) => a.subject < b.subject ? 1 : -1);
    setBoardList(copy);
  }

  function increaseLike(index) {
    let copy = [...boardList];
    copy[index]["like"] += 1;
    setBoardList(copy);
  }

  function showModal(index) {
    setModalState(!modalState);
  }

  function updateBoard() {
    let copy = [...boardList];
    copy[0]["subject"] = "야호";
    setBoardList(copy);
  }

  function deleteBoard(index) {
    let copy = [...boardList];
    delete copy[index];
    setBoardList(copy);
  }

  function addBoard() {
    let board = {
      "subject": inputValue,
      "date": "2023-01-30",
      "like": 0
    };

    let copy = [...boardList];
    copy.push(board);
    setBoardList(copy);
  }

  //////////////////////////////////////////////////////////////////
  /**
   * return
   */
  return (
    <div className="App">
      <div className='black-nav'>
        <div>Coblog</div>
      </div>

      <button onClick={orderByDesc}>내림차순으로 보기</button>

      {
        boardList.map( (board, i)=>{
          return (
            <div className='list' key={i}>
              <h3> 
                { board["subject"] } 
                <span onClick={()=>increaseLike(i)}> | 👍{board["like"]} | </span>
                { board["date"] }
              </h3>
              <button onClick={()=>showModal(i)}>보기 / 숨기기</button>
              <button onClick={()=>deleteBoard(i)}>삭제하기</button>
              { modalState ? <Modal board={board} color="skyblue" updateBoard={updateBoard} /> : null }
              <hr/>
            </div>
          )
        } )
      }

      <input onChange={(e)=>{ setInputValue(e.target.value); }} />
      <button onClick={ addBoard }>저장하기</button>

    </div>
  );
}

//////////////////////////////////////////////////////////////////
/**
 * Modal
 */
function Modal(props) {
  let board = props["board"];
  let updateBoard = props["updateBoard"];

  return (
  <div className='modal' style={{background: props.color}}>
    <h2>{board["subject"]}</h2>
    <p>{board["date"]}</p>
    <p>내용</p>
    <button onClick={updateBoard}>수정하기</button>
  </div>
  )
}

// test



export default App;

