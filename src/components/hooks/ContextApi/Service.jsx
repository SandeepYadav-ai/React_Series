//import { useContext } from "react"
import { use } from "react";
import { BioContext } from ".";
//import { useBioContext } from ".";

export const Service = ()=> {
    // const {myName, age} = useContext(BioContext); //useContext ko conditionally nhi use kar sakate
    //const {myName, age} = useBioContext(); //custom hook
    const newHook = true;
        let myName, age;
        if(newHook){
            ({myName, age} = use(BioContext))
        };

    return(
        <div>
            <h1>hello context API (service) {myName}.{age}age</h1>
        </div>
    )
}