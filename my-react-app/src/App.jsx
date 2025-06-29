import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  
  const [count, setCount] = useState(4)


  return ( 
    <>
      <h1>Seth and Swetha Friends</h1>
      <p>We are better together</p>
     <div>
      <header>
        <nav>
          <ul>
            <li>Intro to Programming</li>
            <li>React</li>
            <li>Node.JS</li>
            <li>ApprenticeShip & Practicum</li>
            <li>Cyber Security</li>
          </ul>
          
        </nav>
      </header>
     </div>
     <h2>{count}</h2>
      <div id='buttons'>
      <button id="increment" onClick={()=>setCount(count + 1)}>Increment</button>
      <button id="decrement" onClick={()=>setCount(count - 1)}>Decrement</button>
      <button id="multiply" onClick={()=>setCount(count * 2)}>Multiply</button>
      <button id="reset" onClick={()=>setCount(0)}>Reset</button>
      </div>
    </>
  )
  
}

export default App
