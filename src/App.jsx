import { useState } from 'react'
import Registro from './Registro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Registro/>
    </>
  ); 
}

export default App
