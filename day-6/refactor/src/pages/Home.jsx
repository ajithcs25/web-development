// function Home() {
//   return <h1>Home Page</h1>;
// }

// export default Home;



// improved code

// import Page from "./Page";

// function Home() {
//   return (
//     <div >
//     <Page title="Home Page" />
//     <div className="card">
//     <h1 >Kota Ajith Kumar</h1>
//     </div>
//     </div>

//   )
// }

// export default Home;


// for lifting state

import Page from "./Page";

function Home({ name, setName }) {
  return (
    <>
      <Page title="Home Page" />
      <h1>{name}</h1>

      <button onClick={() => setName("Kota Ajith Kumar")}>
        Set My Name
      </button>
    </>
  );
}

export default Home;
