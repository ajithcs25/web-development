import { useState } from 'react'
import ProfileModal from './ProfileModal'
import './App.css'

function App() {
 const [open , setopen] = useState(false)

  return (
    <div style={{padding:"40px"}}>
      <h1>React Portal Demo</h1>
      <button onClick={() => setopen(true)}>View Profile</button>

      {open && <ProfileModal onclose={() => setopen(false)} />}
    </div>
  )
}

export default App
