import { useState } from "react";

export const ReactMemo = ()=> {
    const [counter, setCounter] = useState(0);
    return(
        <div>
            <h1>hello memo</h1>
            <p>count:{counter}</p>
            <button className="counter" onClick={()=> setCounter((prev)=> prev + 1)}>click me!</button>
            <Count />
        </div>
    );
};