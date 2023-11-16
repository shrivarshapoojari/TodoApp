import { useState } from 'react'
 
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
   const [todos,setTodos]=useState([
    {id:1,text:"Sleep",isFinished:true}
  ])

  const addTodos=(todotext)=>
  {
    var nextId=todotext.length+1;
    setTodos([...todos, {id:nextId,isFinished:false,text:todotext}])
  }

  return (
    <>
      
      <TodoList todos={todos} setTodos={setTodos}/>
      <AddTodo addTodos={addTodos}/>
    </>
  )
}

export default App
