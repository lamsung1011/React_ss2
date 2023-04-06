
const Todo = (props) => {
    // console.log('check props', props);
    // const todos = props.todos;
    const { todos, title, deleteDataTodo } = props

    const handleDelete = (id) => {
        deleteDataTodo(id)
    }

    return (
        <div className='todo-container'>
            <div className="title">
                {props.title}
            </div>
            {todos.map(todo => {
                // console.log('>>>check todo list', todo);
                return (
                    <div key={todo.id}>
                        <li className='todo-child' > {todo.title}
                            &nbsp; &nbsp; <span onClick={() => handleDelete(todo.id)}>x</span></li>
                    </div>
                )
            })}

            <hr />
        </div>
    );

}

export default Todo;