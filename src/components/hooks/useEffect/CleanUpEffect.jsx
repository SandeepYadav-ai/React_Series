import { useState,useEffect } from "react";

const CleanUpEffect = ()=> {
    const [count, setCount] = useState(134);
    useEffect(()=> {
        const data = setInterval(()=> {
            setCount((prev)=> prev + 1);
        }, 1000);
        return()=> clearInterval(data);
    }, []);
    console.log(count);
    
    return(
        <div>
            <h1>Live: The number of children born in All Hospital</h1>
            <p><b>count:-</b> {count} </p>
        </div>
    );
};
export default CleanUpEffect; 