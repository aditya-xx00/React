import {useState} from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex slex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">

        <button onClick={() => setColor("red")}
        className="outline-none px-4 py-4 rounded-full shadow-lg text-white" style={{backgroundColor:"red"}} >Red</button>
         <button onClick={() => setColor("green")}
        className="outline-none px-4 py-4 rounded-full shadow-lg text-white" style={{backgroundColor:"green"}} >Green</button> 
        <button onClick={() => setColor("blue")}
        className="outline-none px-4 py-4 rounded-full shadow-lg text-white" style={{backgroundColor:"blue"}} >Blue</button> 
        <button onClick={() => setColor("pink")}
        className="outline-none px-4 py-4 rounded-full shadow-lg text-white" style={{backgroundColor:"pink"}} >Pink</button> 
        <button onClick={() => setColor("yellow")}
        className="outline-none px-4 py-4 rounded-full shadow-lg text-white" style={{backgroundColor:"Yellow"}} >yellow</button>
        </div> 
     </div>   
    </div>
  )
}

export default App
