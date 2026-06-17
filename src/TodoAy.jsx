import { useState } from "react";

export const TodoAy = () => {
    const [todo,setTodo] = useState([{id:1,task:'todo - today complete',done:false,},{id:2, task:'Hmmmmm',done:false,}])
    const [input,newInput] = useState('')

 
    


    function addTask(){
        setTodo([
            ...todo,
            {id:Date.now(),task:input,done:false,}])

            newInput('')
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

    function newTask(e){
        newInput(e.target.value)
    }

    return( 
        <>  
        <div>
            <h3>Tasks</h3>
            <div>
                <input style={{margin: "10px 6px 5px 40px"}} value={input} onChange={newTask}/>

                  <button onClick={addTask}>+ New Task</button>
            </div>
           
            <ul>{todo.filter(item => !item.done).map((item) => {
                
               return < li key={item.id} > <input type="checkbox" value={item.id} onChange={() =>markAs(item.id)} /> <span style={{textDecoration: item.done ? "line-through" : "none"}} >{item.task}</span></li>
            })}</ul>
            
          

        </div>
        <div>
            <h3>Done</h3>
              <ul>{todo.filter(item => item.done).map((item) => {
                
               return < li key={item.id} > <input type="checkbox" value={item.id} onChange={() =>markAs(item.id)} /> <span style={{textDecoration: item.done ? "line-through" : "none"}} >{item.task}</span></li>
            })}</ul>
        </div>
        </>
    )
}