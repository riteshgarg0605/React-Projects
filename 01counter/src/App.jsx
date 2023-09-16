import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function incCount() {
      if (count < 20) setCount(count + 1);
    }
  function decCount() {
      if (count > 0) setCount(count - 1);
    }
    
  return (
    <>
      <h2>React Project-1</h2>
      <h2>Counter using<br/> Vite & React</h2>
        <p>
        Current count: {count}
        </p>
        <button onClick={incCount}>
         +
        </button>
        <button onClick={decCount}>
         -
        </button>
    </>
  )
}

export default App
