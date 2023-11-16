import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext';

const AddTodo = () => {
  const {todos,setTodos,addTodos}=useContext(TodoContext);

const [todoText,setTodoText]=useState(" ");

  return (
    <div>
      <input placeholder="Add ur next todo" onChange={(e)=>setTodoText(e.target.value)} value={todoText}/>
      <button onClick={
        ()=>{
            addTodos(todoText)
            setTodoText(' ')
        }
      }>Submit</button>
    </div>
  )
}

export default AddTodo
