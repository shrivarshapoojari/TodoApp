import React, { useState } from 'react'

const AddTodo = ({addTodos}) => {

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
