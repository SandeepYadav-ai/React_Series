import { useReducer } from "react";

const reducer = function(state,action){
    switch (action.type) {
        case "INCREMENT":
            return {...state,count: state.count + 1}
            
        case "DECREMENT":
            return {...state,count: state.count - 1}
            
        case "RESET":
            return {...state,count: 0}
    
        default:
            return state;
            
    };
};

export const Counter = ()=> {
    const [state, dispatch] = useReducer(reducer, {count:0,inc:2,desc:2})
    return(
        <div>
            <h1>Count update to use useReducer hook</h1>
            <p>count: {state.count}</p>
            <button className="counter" onClick={()=> dispatch({type:'INCREMENT'})}>incrememnt</button>
            <button className="counter" onClick={()=> dispatch({type:"DECREMENT"})}>decrement</button>
            <button className="counter" onClick={()=> dispatch({type:'RESET'})}>reset</button>
        </div>
    );
} ;