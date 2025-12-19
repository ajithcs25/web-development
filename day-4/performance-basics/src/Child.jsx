// function Child() {
//   console.log("Child rendered");
//   return <h3>I am Child Component</h3>;
// }

// export default Child;

import React from "react";

const Child = React.memo(() => {
  console.log("Child rendered");
  return <h3>I am Child Component</h3>;
});

export default Child;
