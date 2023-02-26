import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No Todos to display":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
              <div class="carousel-inner">
        <div class="carousel-item active">
        <img  src="https://source.unsplash.com/1200x400/?motivation" class="d-block w-100" alt="..."/>
         </div>
         </div>
        </div>
    )
}
