import React, { useRef, useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import {v4 as uuidv4} from 'uuid';
export  function App() {
    const KEY = 'ToDoApp.todos'

    const [todos, setTodos] = useState([
         {id:1, task:"barrer", completed:false}
    ])
    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos){
            setTodos(storedTodos)
        }
    
    }, []);

    useEffect(() => {localStorage.setItem(KEY,JSON.stringify(todos))}, [todos]);
    

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if(task === '') return;
        
        // setTodos((prevTodos)=>{
        //     return [...prevTodos, {id:uuidv4(), task:task, completed:false}]
        // })
        setTodos( [...todos, {id:uuidv4(), task:task, completed:false}])
        todoTaskRef.current.value = null;
    };
    const toggleTodo = (id) =>{
        const newTodos = [...todos];
        const todo = newTodos.find((todo)=>todo.id ===id);
        todo.completed = !todo.completed
        setTodos(newTodos);
    };

    const handleClearAll = (id) =>{
        // const newTodos = todos.filter((todo)=>!todo.completed);
        // setTodos(newTodos);

        setTodos(todos.filter((todo)=>!todo.completed));
    };
  return (
      < >
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <h2 className="navbar-brand">
            {/* <img src="https://th.bing.com/th/id/R.f22d14aea2e82d2a335936c7a92f8ca9?rik=fJPUqQa1fXI8NA&pid=ImgRaw&r=0" alt="" width="30" height="24" class="d-inline-block align-text-top"/> */}
            📝To-Do App
            </h2>
        </div>
        </nav>
        <div className="container ">
        <div className="input-group  pt-4 pb-5">
            <input ref={todoTaskRef} type="text" className="form-control" placeholder="Nueva tarea..." aria-label="Recipient's username with two button addons"/>
            <button onClick={handleTodoAdd} className="btn btn-outline-primary" type="button">➕</button>
            <button onClick={handleClearAll } className="btn btn-outline-primary" type="button">🗑️</button>
        </div>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
        </div>
        <div className="container pt-4">  
            <b>
                Te quedan {todos.filter((todo)=>{return !todo.completed}).length} tareas por terminar
            </b>
        </div>
      </>
  );
}
