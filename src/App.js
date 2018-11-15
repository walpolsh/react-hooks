import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index }) {
  return(
    <div className='todo'>
      {todo.text}
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value)
    setValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' className='input' value={value} placeholder='add todo' onChange={e => setValue(e.target.value)}></input>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about hooks',
      isCompleted: false,
    },
    {
      text: 'Go to Henry\'s',
      isCompleted: false,
    },
    {
      text: 'Eat a big bowl of tuna w/veggies and ramen',
      isCompleted: false,
    }
  ])

  const addTodo = text => {
    const NewTodos = [...todos, {text}]
    setTodos(NewTodos)
  }
  return (
    <div className="app">
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;