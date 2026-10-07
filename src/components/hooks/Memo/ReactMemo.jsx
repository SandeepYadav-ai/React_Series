import { useMemo, useState } from "react";
import { Count } from "./MemoCount";

export const ReactMemo = ()=> {
    const [counter, setCounter] = useState(0);

    // const myBioData = {
    //     name: "sandep",
    //     lastName: "yadav",
    //     age: 29
    // } isame child component render hota hai. beacuse every time data ko diffrent memory store karata hai. 
    // isliye useMemo hook use karate ye same data ko same memory store karata hai.
    // taki came data ke time component redender na ho 

    const myBioData = useMemo(()=>{
        return{
            name: "sandeep",
            lastName: "yadav",
            age: 29
        }
    },[])

    return(
        <div>
            <h1>hello memo</h1>
            <p>count:{counter}</p>
            <button className="counter" onClick={()=> setCounter((prev)=> prev + 1)}>click me!</button>
            <Count data={myBioData} />
        </div>
    );
};