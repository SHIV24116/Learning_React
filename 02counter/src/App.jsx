import { useState } from 'react'  //hooks

// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import './App.css'

function App() {

  let [counter,setcounter]=useState(15)          //useStae ke ndar kuch bhi de sakte hain...int,string,empty string,etc
                                            //hook ko jaie hi pata chalega....wo har jagah counter ki value update kardega

  //let counter= 15
  const addValue=()=> {
    console.log("clicked",counter);
    counter=counter+1
    setcounter(counter) //or directly....setCounter(counter+1)
  }

  const removeValue=()=> {
    console.log("clicked",counter);
    if(counter>0) counter=counter-1;
    setcounter(counter) //or directly....setCounter(counter+1)
  }

  return (
    <>
      <h1>chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
