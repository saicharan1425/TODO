import { useState } from "react";

export const TodoAy = () => {
    const [todo,setTodo] = useState([{id:1,task:'todo - today complete'},{id:2, task:'Hmmmmm'}])

    const [btn, setisBtndisabled] = useState(false)


    function addTask(){
        setTodo([
            ...todo,
            {id:3,task:'1st Task completed'}])

            setisBtndisabled(true)
    }

    return(
        <>
        <div>
            <ul>{todo.map((item) => (
                < li key={item.id}>{item.task}</li>
            ))}</ul>
            
            <button onClick={addTask} disabled={btn}>{btn ? 'Task addded' : 'add Task'}</button>
        </div>
        </>
    )
}