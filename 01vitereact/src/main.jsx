import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//main me app ko import krte hai joki ek method hee hai to kya  hum directly ek method yaha likh skte hai
function MyApp(){
    return(
        <div>
            <h1>making My app fuction directly in main  </h1>
        </div>
    )
}
//official way in which react reads elements tags 

const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'click me to visit Google',
    //3rd jo aata hai wo aata hai evaluated expression
    anotherElement
)
createRoot(document.getElementById('root')).render(
    reactElement
)
