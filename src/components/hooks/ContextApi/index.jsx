import { createContext } from "react";

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