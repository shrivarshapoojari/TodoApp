import { useReducer, useState } from 'react'

import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'
import TodoReducer from '../src/context/reducers/TodoReducer'
function App() {
   
  const [todos,dispatch] =useReducer(TodoReducer,[])

  
  return (
    <>
      < TodoContext.Provider value={{todos,dispatch}} >

        <TodoList/>
        <AddTodo />
      </TodoContext.Provider>
    </>
  )
}

export default App
