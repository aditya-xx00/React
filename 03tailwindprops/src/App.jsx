import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  
  let myobj={
    name:"prince",
    age:21
  }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <Card username="Aditya Kushwaha" price="101" someobj={myobj}/>
     <Card username="Rinshu Prince"/>
    </>
  )
}

export default App
