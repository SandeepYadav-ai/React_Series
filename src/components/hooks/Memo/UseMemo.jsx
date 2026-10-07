import { useMemo, useState } from "react";

const EcpensiveComponent = ()=> {
    //   Expensive calculation function
    const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

    const total = useMemo(()=> sum(), []);
    //value ko optimize karati hai; mwans ye value ko cache me store lar ke rakhati h 
    // jab rerander hone par store value ko deti hai,
  
    //const total = sum();
    return <p> sum: {total} </p>
};

export const MemoPerentComponent = function() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <EcpensiveComponent />
            <h1>hello usememo</h1>
            <p>count:{count}</p>
            <button className="counter" onClick={()=> setCount((prev)=> prev+1)}>click me!</button>
        </div>
    );
};