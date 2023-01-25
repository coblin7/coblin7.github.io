import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "벽돌 한 장";

  return (
    <div className="App">
      <div className='black-nav'>
        <div>Coblog</div>
      </div>
      <div className='list'>        
        <h3> { posts }</h3>
        <p>1월 25일</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
