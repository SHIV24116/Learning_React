import { createContext, useContext } from "react";

export const TodoContext= createContext({
    todos: [
        {
            id:1,
            todo: "To Do message",
            complete: false,
        }  //this is one of the todo
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})  // defined the variables and methods

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider   //we did this so that we dont need to do this .Provider in the other files