import { useEffect, useState } from "react";
//import "./App.css"

const EffectChanllenge = ()=> {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("")

    useEffect(()=>{
        document.title = `counter ${counter}`;
        console.log(name);
        
    },[name,counter])
    return(
        <div>
            <h1>Effect Challenge</h1>
            <p>
                <span>count :- {counter}</span>
            </p>
            <button className= "counter" onClick={()=>setCounter(counter + 1)}>click me!</button>
            <p>Name:- {name} </p>
            <label htmlFor="">
                <b>message:- </b>
            <input 
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                </label>
        </div>
    );
};
export default EffectChanllenge;