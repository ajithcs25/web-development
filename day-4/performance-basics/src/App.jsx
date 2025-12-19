import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <div className="card">
      <h1>Count: {count}</h1>
      <div className="id">
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child />
    </div>
    </div>
  );
}

export default App;
