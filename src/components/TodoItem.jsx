import React, { useRef } from 'react';

export  function TodoItem({todo,toggleTodo}) {
  const {id, task, completed} = todo;
  const checkedRef = useRef();
  const handledCheck = () => {
    toggleTodo(id);
  };

  return (
    <>
      <li>
        <div >
        <input className="d-inline-block" type="checkbox" checked={completed} onChange={handledCheck}/>
        {completed ? <h6><del>{task}</del>✔️</h6>:<h6>{task}❗</h6>}
        </div>
        </li>
    </>
    );
}
