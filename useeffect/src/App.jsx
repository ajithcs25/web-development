import { useState , useEffect } from 'react'

import './App.css'

function App() {

  const [count , setcount] = useState(() => {
  const savedcount = localStorage.getItem("count");
  return savedcount ? Number(savedcount) : 0;
});
useEffect(() => {
  localStorage.setItem("count",count);
},[count]);
 
  return (
    <div className='id'>
      <div className='card'>
      <h1>counter using useEffect(persistent counter)</h1>
      <h3>{count}</h3>

      <button onClick={() => setcount(count+1)}>Increment</button>
      <button onClick={() => setcount(count-1)}>Decrement</button>
      <button onClick={() => setcount(0)}>Reset</button>
    </div>
    </div>
  )
}

export default App
