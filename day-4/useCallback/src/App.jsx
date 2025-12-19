import { useState, useCallback } from "react";
import Child from "./Child";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  // memoized function
  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  // // entire function re-renders
  //   const handleClick = () => {
  //   console.log("Child button clicked");
  // };

  return (
    <div className="id">
      <div className="card">
      <h1>useCallback</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>

      {/* Passing function to memoized child */}
      <Child onClick={handleClick} />
    </div>
    </div>
  );
}

export default App;
