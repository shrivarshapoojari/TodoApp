function TodoReducer(state,action){
    if(action.type=='add_todo')
    {
        {
            var nextId = state.length + 1;
            return([...state, { id: nextId, isFinished: false, text:action.payload.todoText }])
          }
        

    }
    else if(action.type=='edit_todo')
    {
         
          const newTodoList=state.map(todo=>{
            if(todo.id==action.payload.id)
            {
              todo.text=action.payload.newTodo
            }
            return todo;
            
          })
          return newTodoList
        
        
      
    }
    else if (action.type='finish_todo')
    {
        const newTodoList=state.map(todo=>{
            if(todo.id==action.payload.id)
            {
              todo.isFinished=action.payload.state
            }
            return todo;
            
          })
          return newTodoList
    }
    else if(action.type=='delete_todo')
    {
        const newList=state.filter(todo=>todo.id!=action.payload.id)
        return newList;
    }

    return state
}
export default TodoReducer