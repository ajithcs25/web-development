import { useState , useEffect} from 'react'
import './App.css'

function App() {

  const [time,settime ] = useState(0);
  const [isrunning , setisrunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if(isrunning){
      intervalId=setInterval(() => {
        settime((prevtime) => prevtime+1);
      }, 1000);
    }

  

  return ()  => clearInterval(intervalId);
  }),[isrunning];

 return (
  <div className='box'>
    <h1>Stop Watch</h1>
    <h3>{time}Sec</h3>

    <button onClick={() => setisrunning(true)}>Start</button>
    <button onClick={() => setisrunning(false)}>Stop</button>
    <button onClick={() => settime(0)}>Reset</button>
  </div>

 );
}
export default App
