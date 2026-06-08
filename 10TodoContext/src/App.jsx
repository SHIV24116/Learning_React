import { useEffect, useState } from "react"
import { TodoProvider } from "./context"
import TodoForm from "./components/Todoform"
import TodoItem from "./components/TodoItem"

 

function App() {
  const [todos,settodos]=useState([])

  const addTodo=(todo)=>{
    settodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo=(id,todo)=>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)
    ))
  }

  const deleteTodo=(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }
  
  ////method a little different from sir
  const toggleComplete=(id)=>{
    settodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))  //it gets the data in the string format so .parse coverts it to the json form

    if(todos && todos.length>0){
      settodos(todos)
    }
  },[])    ///this will get all the data from local storage as soon as the page loads 
  // We can access the local storage like this directly in React until we are sot moving to the server side

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1 className="bg-gray-600 text-center font-bold text-3xl">Todo List</h1>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}
              className="w-full"
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
