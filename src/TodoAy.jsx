import { useState } from "react";

export const TodoAy = () => {
    const [todo,setTodo] = useState([{id:1,task:'todo - today complete',done:false,},{id:2, task:'Hmmmmm',done:false,}])

 
    


    function addTask(){
        setTodo([
            ...todo,
            {id:Date.now(),task:'1st Task completed',done:false,}])
    }

    

    function markAs(id){
      setTodo(todo.map(
        (item) => {
            if(item.id == id){
                console.log(item.id);

               return {...item,done: !item.done}
            }
            return item
        }
      ))
    }

    return( 
        <>  
        <div>
           
            <ul>{todo.map((item) => {
                
               return < li key={item.id} > <input type="checkbox" value={item.id} onChange={() =>markAs(item.id)} /> <span style={{textDecoration: item.done ? "line-through" : "none"}} >{item.task}</span></li>
            })}</ul>
            
            <button onClick={addTask}>+ Task</button>

        </div>
        </>
    )
}