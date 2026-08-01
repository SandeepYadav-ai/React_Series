import { useState } from "react";
//import './App.css'

function UseState() {
    const [counter, setCounter]=useState(0);
    let AddValue = ()=> {
        if(counter<16) {
        setCounter((counter)=>counter+1);
        setCounter((counter)=>counter+1);//direct 2 print beacause previouse value also store
        console.log(counter);
        }
    }
    const RemoveValue = ()=> {
        if(counter>0) {
        setCounter(()=>counter-1);
        }
    }

    return(
        <>
        <h1>useState Hook {counter}</h1>
        <section>
        <button className="counter" onClick={AddValue}>increment {counter}</button>
        <br />
        <button className="counter" onClick={RemoveValue}>decrement {counter}</button>
        </section>
        </>
    )
}
export default UseState;