import { useState } from "react";

function LiftStateUp() {
    const [inputValue, setInputValue] = useState("");
    return (
        <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
        <DisplayComponent inputValue={inputValue}/>
        </>
    );
};

function InputComponent({inputValue, setInputValue}) {
    //const [inputValue, setInputValue] = useState("");
    return(
        <>
        <input class="text-3xl font-bold"
        type="text area" 
        placeholder="enter name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
         ></input>
        </>
    );
};

const DisplayComponent = ({inputValue})=> {
    return(
        <div>
    <p class="text-1xl font-bold">input from child component:-{inputValue} </p>
    </div>
    )
}
export default LiftStateUp;