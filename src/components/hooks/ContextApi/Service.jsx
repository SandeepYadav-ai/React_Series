//import { useContext } from "react"
import { useBioContext } from ".";

export const Service = ()=> {
    // const {myName, age} = useContext(BioContext);
    const {myName, age} = useBioContext(); //custom hook
    return(
        <div>
            <h1>hello context API (service) {myName}.{age}age</h1>
        </div>
    )
}