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
        <div className="mt-10 sm:mx-auto sm:max-w-sm">
            <h1>Hello Use Effect </h1>
            <p>Time:{date} </p>
            <h1>increment number </h1>
            <p>counter: {counter}</p>
            <button onClick={()=> setCounter((prev)=> prev + 1)} className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Clickme</button>
        </div>
    );
};
export default UseEffect;