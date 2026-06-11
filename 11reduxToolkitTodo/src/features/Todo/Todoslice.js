import { createSlice , nanoid } from "@reduxjs/toolkit"


const initialState={
    todos: [{id:1,text:"Hello World"}]
}

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo ={
                id: nanoid(),  //probably assigns a unique id
                text : action.payload
            }
            state.todos.push(todo)
        },  //state gives the access of initialState and its future states and actions ke andar jo bhi data pass ho raha hai
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!==action.payload)
        },
    }
})  //in context API we were just declaring functions here we were not definind them 
//  but here we are actually writing the definitions as well

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer