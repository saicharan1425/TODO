import { useEffect, useState } from "react";

export const TodoAy = () => {
    const [todo,setTodo] = useState(()=>{
        const storeTodo = localStorage.getItem('todoay');
        return storeTodo ? JSON.parse(storeTodo) : [{id:1,task:"Enter Todo's in Input",done:false}]
    })
    const [input,newInput] = useState('')

 
    useEffect(()=>{
        localStorage.setItem("todoay",JSON.stringify(todo))
    },[todo])


    function addTask(){
         if (!input.trim()) return;

        setTodo([
            ...todo,
            {id:Date.now(),task:input,done:false,}])

            newInput('')
    }



    function markAs(id){
      setTodo(todo.map(
        (item) => {
            if(item.id == id){
               return {...item,done: !item.done}
            }
            return item
        }
      ))
    }

    function newTask(e){
        newInput(e.target.value)
    }

    function deleteTask(id){
      setTodo(todo.filter((item) => item.id !== id))
    }

    function handleSubmit(e) {
    e.preventDefault(); 
    addTask();
    newInput('')
}

    return( 
        <>  
        <div>
            <h3>Tasks</h3>
            <form onSubmit={handleSubmit}>
          
                <input style={{margin: "10px 6px 5px 40px"}} value={input} onChange={newTask}/>

                  <button type="submit">+ New Task</button>
         
            </form>
           
            <ul>{todo.filter(item => !item.done).map((item) => {
                
               return < li key={item.id} > <input type="checkbox" checked={item.done} onChange={() =>markAs(item.id)} /> <span style={{textDecoration: item.done ? "line-through" : "none"}} >{item.task}</span></li>
            })}</ul>
            
          

        </div>
        <div>
            <h3>Done</h3>
              <ul>{todo.filter(item => item.done).map((item) => {
                
               return < li key={item.id} > <input type="checkbox" checked={item.done} onChange={() =>markAs(item.id)} /> <span style={{textDecoration: item.done ? "line-through" : "none"}} >{item.task}</span><button style={{margin: " 0px 0px 0px 6px"}} onClick={()=> deleteTask(item.id)}>Delete</button> </li>
            })}</ul>
        </div>
        </>
    )
}