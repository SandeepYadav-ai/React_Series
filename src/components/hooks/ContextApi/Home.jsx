//import { useContext } from "react"
//import { useBioContext } from ".";

import { use } from "react";
import { BioContext } from ".";

export const Home = ()=> {
    // const {myName, age} = useContext(BioContext); //useContext ko conditionally nhi use kar sakate
    //const {myName, age} = useBioContext(); //custom hook
    const {myName, age} = use(BioContext); // use API or check on service and about jsx did diffrent way for knoelage
    return(
        <div>
            <h1>hello context API {myName}.{age}age</h1>
        </div>
    );
};