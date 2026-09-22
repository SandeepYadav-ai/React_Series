import { useState } from "react";

export const UseRef = function() {
    const username = document.getElementById('username');
    
    
    
    //const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");
    const eventHandle = (e)=> {
        e.preventDefault();
        console.log(username.target.value);
    };
    //console.log(eventHandle);
    
    return(
        <div>
            <form onSubmit={eventHandle}>
                <label htmlFor="">username</label>
                <input 
                    type="text"
                    id="username"
                    //placeholder="enter usename"
                    //value={username}
                    //onChange={(e)=> setUsername(e.target.value)} 
                /><br/>
                <label htmlFor="">password</label>
                <input 
                    type="text"
                    id="password"
                    //placeholder="enter password"
                    //value={password}
                    //onChange={(e)=> setPassword(e.target.value)} 
                />
                <button>submit</button>
            </form>
            
        </div>
    );
};