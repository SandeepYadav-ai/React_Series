import { useReducer } from "react";

export const UseReducer = ()=> {
    const reducer = (state, action) => {
        console.log(state, action.type);
        if(action.type === "INCREMENT"){
            return state + 1;
        };
        if(action.type === "DECREMENT"){
            return state - 1;
        };
        
    };
    const [counter, dispatch] = useReducer(reducer, 0);
    console.log(useReducer(reducer, 0));
    console.log(counter);
    
    
    return(
        <>
        <div>
            <h1>hello useReducer</h1>
            <h2>COUNT: {counter}</h2>
            <button className="counter" onClick={()=> dispatch({type:"INCREMENT"})}>icrement</button>
                <br />
            <button className="counter" onClick={()=> dispatch({type:"DECREMENT"})}>decrement</button>
        </div>
        </>
    );
};