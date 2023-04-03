import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


const App = () => {

  let [name, setName] = useState('Muf')
  // let obj = { name: 'Mù', age: 18, truename: 'Công Thành' }
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Coding' },
    { id: 'todo2', title: 'Gaming' },
    { id: 'todo3', title: 'Fucking' }
  ]);

  const handleEventClick = (event) => {

    if (!address) {
      alert('Điền vào hộ bố mày cái')
      return;
    }

    let newTodo = { id: 'abc', title: address }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
    // console.log(event.target.value);
  }

  return (

    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world - React from {name}</h1>
        <div className='todo-container'>
          {todos.map(todo => {
            console.log('>>>check todo list', todo);
            return (
              <li className='todo-child' key={todo.id}> {todo.title} </li>
            )
          })}
        </div>
        {/* <p>This is {obj.name} {obj.age} tủi</p> */}
        <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
