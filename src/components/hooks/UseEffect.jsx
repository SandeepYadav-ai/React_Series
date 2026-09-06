import { useEffect, useState } from "react";

const UseEffect = ()=> {
    const [date, setDate] = useState("");
    const [counter, setCounter] = useState(0)
    useEffect(()=> {
        setInterval(()=> {
            const currentdate = new Date();
            setDate(currentdate.toLocaleTimeString())
            console.log(currentdate);
        },1000);
        
        console.log("counter",counter);
        
    },[counter])

    return(
        <div>
            <h1>Hello Use Effect </h1>
            <p>Time:{date} </p>
            <h1>increment number</h1>
            <p>counter: {counter}</p>
            <button onClick={()=> setCounter(counter + 1)}>Clickme</button>
        </div>
    );
};
export default UseEffect;