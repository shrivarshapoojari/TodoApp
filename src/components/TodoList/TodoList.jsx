import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({ todos,setTodos }) => {
  function onDeleteTodo(id)
  {
    const newList=todos.filter(todo=>(todo.id!=id))
    setTodos(newList)
  }
  function onEditTodo(id,newTodo)
  {
    const newTodoList=todos.map(todo=>{
      if(todo.id==id)
      {
        todo.text=newTodo
      }
      return todo;
      
    })
    setTodos(newTodoList)
   
  }

  function onFinishedTodo(id,state)
  {
    const newTodoList=todos.map(todo=>{
      if(todo.id==id)
      {
        todo.isFinished=state
      }
      
      return todo;
    })
    setTodos(newTodoList)

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
