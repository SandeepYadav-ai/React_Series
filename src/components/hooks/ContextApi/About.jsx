import { useContext } from "react"
import { BioContext } from ".";

export const About = ()=> {
    const {myName, age} = useContext(BioContext);
    return(
        <div>
            <h1>hello context (About) API {myName}.{age}age</h1>
        </div>
    )
}