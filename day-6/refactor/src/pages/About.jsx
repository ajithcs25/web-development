// function About() {
//   return <h1 className="page">About Page</h1>;
// }
// export default About;


// improved code

import Page from "./Page";

function About() {
  return (
    <>
  <Page title="About Page" />
    <div className="card">
        <h1>Web Developer</h1>
    </div>

    </>
  )
}

export default About;
