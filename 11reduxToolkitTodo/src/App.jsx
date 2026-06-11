import { useState } from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
 

function App() {
   

  return (
    <>
      <h1 className='bg-gray-600  text-center font-bold text-2xl p-2'>Using Redux-Toolkit</h1>
      <Addtodo/>
      <Todos />
    </>
  )
}

export default App
