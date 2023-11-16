import React, { useState } from 'react'

const Todo = ({finishedTodo,editTodo,text, isFinished,id,deleteTodo}) => {
const [isEditing,setisEditing]=useState(false)
const[todoText,setTodoText]=useState(text)




  return (
    <>
    <div>
    <input type="checkbox" checked={isFinished} onChange={()=>finishedTodo(!isFinished)} />
   {isEditing? <input value={todoText} onChange={(e)=>setTodoText(e.target.value) } /> :<span>{todoText}</span>}
    <button onClick={()=>{
        setisEditing(!isEditing)
        editTodo(todoText)
    }
      
      }>
        {isEditing? 'Save':'Edit'}</button>
    <button onClick={deleteTodo}>Delete</button>
    </div>
    </>
  )
}

export default Todo
