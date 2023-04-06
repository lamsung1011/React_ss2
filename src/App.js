import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';


const App = () => {

  let [name, setName] = useState('Muf')
  // let obj = { name: 'Mù', age: 18, truename: 'Công Thành' }
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Coding', type: 'Blind' },
    { id: 'todo2', title: 'Gaming', type: 'Blind' },
    { id: 'todo3', title: 'Fucking', type: 'Muf' },
    { id: 'todo4', title: 'Dancing', type: 'Muf' }
  ]);

  // didmount => chạy 1 lần duy nhất
  useEffect(() => {
    console.log('Run Use Effect');
  }, [address]);
  useEffect(() => {
    console.log('Run Use Effect Todos');
  }, [todos]);

  const handleEventClick = (event) => {

    if (!address) {
      alert('Điền vào hộ bố mày cái')
      return;
    }

    let newTodo = { id: Math.floor((Math.random() * 1000) + 1), title: address, type: 'Muf' }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
    // console.log(event.target.value);
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  return (

    <div className="App">

      <header className="App-header">
        <Nav />

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world - React from {name}</h1>
        <Covid />




        {/* <Todo
          todos={todos}
          title={'all todo'}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter(item => item.type === 'Blind')}
          title={`Mù's Todos`}
        />

        <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button> */}
      </header>
    </div>
  );
}

export default App;
