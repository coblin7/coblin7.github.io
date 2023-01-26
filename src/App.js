/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [title, titleTool] = useState(
    [
      {"subject": "벽돌1", "date": "2023-01-25"},
      {"subject": "벽돌2", "date": "2023-01-26"},
      {"subject": "벽돌3", "date": "2023-01-27"},
    ]
  );

  let [likeNumber, likeNumberTool] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <div>Coblog</div>
      </div>

      <div className='list'>        
        <h3> { title[0]["subject"] } <span onClick={ ()=>{likeNumberTool(likeNumber++);} }>👍</span> {likeNumber} </h3>
        <p>{ title[0]["date"] } </p>
        <hr/>
      </div>

      <div className='list'>        
        <h3> { title[1]["subject"] }</h3>
        <p>{ title[1]["date"] } </p>
        <hr/>
      </div>

      <div className='list'>        
        <h3> { title[2]["subject"] }</h3>
        <p>{ title[2]["date"] } </p>
        <hr/>
      </div>

      <Modal/>
      
    </div>
  );
}

function Modal() {
  return (
  <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>내용</p>
  </div>
  )

}

export default App;
