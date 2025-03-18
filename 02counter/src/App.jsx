import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setCounter]=useState(2)
   // let counter=15
    const addValue=()=>{
      console.log("value added",counter);
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
    }
    const removeValue=()=>{
      console.log("value removed",counter);
      counter=counter-1
      if(counter>=0)
      setCounter(counter)
    }
  return (
    <>
      <h1>Aditya Kushwaha aur React</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add value : 
         {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value : {counter}</button>
    </>
  )
} 
export default App
