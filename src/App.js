import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { Countdown, NewCountdown } from './views/Countdown';
import Blog from './views/Blog';
import AddNewBlog from './views/AddNewBlog';
import DetailBlog from './views/DetailBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
    // console.log('Run Use Effect');
  }, [address]);
  useEffect(() => {
    // console.log('Run Use Effect Todos');
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

  const onTimesUp = () => {
    alert('times up')
  }

  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />

          <img src={logo} className="App-logo" alt="logo" />


        </header>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>

          <Route path="/timer">
            <Countdown />
            <span>----------------------------------</span>
            <NewCountdown onTimesUp={onTimesUp} />
          </Route>

          <Route path="/todo">
            <Todo
              todos={todos}
              title={'all todo'}
              deleteDataTodo={deleteDataTodo}
            />
            <Todo
              todos={todos.filter(item => item.type === 'Blind')}
              title={`Mù's Todos`}
            />

            <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} />
            <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>

          <Route path="/blog/:id">
            <DetailBlog />
          </Route>

          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
