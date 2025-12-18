import {  useRef, useState  } from 'react'

import './App.css'

function App() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error , seterror] = useState("");

    // for async state
    const [loading, setLoading] = useState(false);

    const handelsubmit = (e) => {
      e.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if(!email){
        seterror("Email required");
        return;
      }
      if(!password){
        seterror("password required");
        return;
      }
      if(password.length < 6){
        seterror("password must contain minimunm of 6 characters");
        return;
      }
      seterror("");
         
      // for async state
      setLoading(true);
      setTimeout(() => {
              
              setLoading(false);
              alert("Login Successful ");
            }, 2000);
    }  ;


  return (
    <div className='container' >
      <h1>Login form</h1>
      <form className='card' onClick={handelsubmit}>
        <input 
        type='text'
        placeholder='enter email'
        ref={emailRef}
        // for async state
        disabled={loading}>
        </input>
        <br/>

        <input 
        type="password"
        placeholder='enter password'
        ref={passwordRef}
        disabled={loading}
        />
        <hr/>
        <button type='submit'
        disabled={loading}>
        
        {/* for async state */}
        {loading ? "Logging in..." : "Login"}

        </button>

        {error && <p className='error'>{error}</p>}

      </form>
    </div>


  )
}

export default App
