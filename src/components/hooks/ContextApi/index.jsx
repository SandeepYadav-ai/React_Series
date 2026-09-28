//import { createContext, useContext } from "react";
import { createContext, use } from 'react';

//step 1
export const BioContext = createContext();

//step 2
export const BioProvider = ({children})=> {
    const myName = "sandeep";
    const age = 29;
    console.log(children);
    
    return(
        <BioContext.Provider value={{myName:myName, age:age}}>{children}</BioContext.Provider>
    );
};

//Custom hook

export const useBioContext = ()=> {
    //const context = useContext(BioContext);
    const context = use(BioContext); // use API
    if(useBioContext === undefined){
        throw new Error("Component must be wrapped with BioProvider");
    };
    return context;
};