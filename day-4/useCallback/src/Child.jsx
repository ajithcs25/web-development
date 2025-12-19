import React from "react";

const Child = React.memo(({onclick}) => {
    console.log("Child rendered");
    return <button onClick={onclick} >Child button</button>
});

export default Child;