import { useState,Callback} from 'react'

import './App.css'

function App() {
  const [lenght,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(fasle)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
 // const passwordGenerator = () => {}
   const passwordGenerator=useCallback(()=> {
     
   },[length,charAllowed,numberAllowed,setPassword])
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  )
}

export default App
