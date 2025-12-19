import { useState , useMemo } from 'react'

import './App.css'

function App() {
  const [search , setsearch] = useState("");
  const [count,setcount] = useState(0);

  const products=[
    "Apple",
    "samsung",
    "Iqoo",
    "Redmi",
    "Vivo",
    "Oppo",
    "Techno",
    "Nothing",
    "Lava",
  ];

  console.log("component rendered");

  // const filterproducts = products.filter((item) => {
  //   console.log("Filtering products");
  //   return item.toLowerCase().includes(search.toLowerCase());
  // });


  // optimized code using useMemo 
  
  const filterproducts = useMemo(() => {
    console.log("Filtering products");
    return products.filter((item) => 
    item.toLowerCase().includes(search.toLowerCase())
  );
  },[search]);
  

  return (
    
    <div>
      <h1>Product FIlter</h1>
      <input
      type='text'
      placeholder='Search product'
      value={search}
      onChange={(e) => setsearch(e.target.value)}
      />

      <button onClick={() => setcount(count+1)}>
        Increment Count:{count}
      </button>

      {filterproducts.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  )
}

export default App
