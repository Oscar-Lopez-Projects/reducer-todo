import React from 'react';


const Todo = () =>{
    return(
        <div> 
            <input 
                className="title-input"
                type="text"
                name="newTodo"
            />
            <button>Todo</button>
        </div>
    )
}

export default Todo;