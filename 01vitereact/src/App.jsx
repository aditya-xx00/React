import Chai from "./chai"
function App() {
   const username="username rakh bhi skte hai nahi bhi chhae to"

  return (
    // yaha sirf ek hee element return kr skte ho isiliye div as  a single element me rakh diye div likne me baar baar dikkat hoti hai to isilie sirf khaali  box <> </> it is called fragment in react hi likh skte ho
    <div> 
     <Chai/>
     <h2>chai aur react {username}</h2>
    </div> 
  )
}
export default App
