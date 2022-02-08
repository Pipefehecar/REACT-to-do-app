import React, { useEffect } from 'react';
import { TodoItem } from './TodoItem';

export  function TodoList({todos, toggleTodo}) {
    useEffect(() => {
      
    }, []);

    return (
      <>
          <div className="card">
              <div className="card-body">
                  <h5 className="card-title display-6">Tareas Pendientes</h5>
                  <ul>
                      {todos.map((todo)=>(  
                          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
                          ))
                      }   
                  </ul>
              </div>
          </div> 
      </>
              );
    
}
