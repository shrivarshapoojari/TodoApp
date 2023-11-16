import React from 'react'
import Todo from '../Todo/Todo'
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
const TodoList = () => {

  const {todos,dispatch,addTodos}=useContext(TodoContext);

  function onDeleteTodo(id)
  {
    dispatch({type:'delete_todo',payload:{id}})
  }
 
   function onEditTodo(id,newTodo)
   {
    dispatch({type:'edit_todo',payload:{id,newTodo}})
   }
   function onFinishedTodo(id,state)
   {
    dispatch({type:'finish_todo',payload:{id,state}})
   }
  return (
   <>
   {todos && todos.map((todo)=><Todo
                                 key={todo.id}
                                 text={todo.text} 
                                 id={todo.id}
                                 isFinished={todo.isFinished}
                                 deleteTodo={()=>onDeleteTodo(todo.id)}
                                 editTodo={(newTodo)=>onEditTodo(todo.id,newTodo)}
                                 finishedTodo={(state)=>onFinishedTodo(todo.id,state)}/>)
   } 
   </>
  )
}

export default TodoList
