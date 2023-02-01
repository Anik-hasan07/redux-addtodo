import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoapp/actions';

const Form = () => {
    const[todoValue,setTodoValue] = useState("")
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj={
            id:time,
            todo:todoValue,
            completed:false
        }
        setTodoValue("");
        dispatch(addTodo(todoObj))


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} />
            <br/>
            <br/>
            <button  type='submit'>ADD</button>
        </form>
      
    </div>
  )
}

export default Form
