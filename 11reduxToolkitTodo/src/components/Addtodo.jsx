import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/Todo/Todoslice";

function Addtodo(){
    const [input,setinput]=useState('')
    const dispatch = useDispatch()

    const addtodohandler =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('')
    }

    return (
    <form onSubmit={addtodohandler} className="flex justify-center space-x-3 mt-12 p-10">
      <input
        type="text"
        className="bg-gray-800 w-dvw rounded-2xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default Addtodo