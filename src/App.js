import logo from './logo.svg';
import './App.css';

function App() {

  let name = 'Mù';
  let obj = { name: 'Mù', age: 18, truename: 'Công Thành' }

  return (

    <div className="App">
      {console.log('check obj', obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world - React from {name}</h1>
        <p>This is {obj.name} {obj.age} tủi</p>
        <a href='https://www.facebook.com/nguyen.congthanh.0111/'>Visit my facebook</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
