import React from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {
    const todos = useSelector((state)=>state.operationsReducer);
    console.log(todos);
  return (
    <div>
        {
            todos.map((todo,index)=>(
        <>
            <div key={index}>
            <input  type="checkbox" checked={todo.completed}></input>    
            <p>
            {todo.todo}
            </p>
            
            </div>
            <div>
             <button>Edit</button>
             <button>Delete</button>
            </div>
        </>

            ))
        }
      
    </div>
  )
}

export default Todos
