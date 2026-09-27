import { useContext } from "react"
import { BioContext } from ".";

export const Home = ()=> {
    const {myName, age} = useContext(BioContext);
    return(
        <div>
            <h1>hello context API {myName}.{age}</h1>
        </div>
    )
}