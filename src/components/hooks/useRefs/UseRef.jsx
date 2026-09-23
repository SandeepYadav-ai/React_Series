import { useRef } from "react";

export const UseRef = function() {
    //const username = document.getElementById('usename');
    //const password = document.getElementById('password');
    const username = useRef(null);
    const password = useRef(null);
    console.log(username);
    
    
    
    
    //const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");
    const eventHandle = (e)=> {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
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
                    ref={username}
                    //onChange={(e)=> setUsername(e.target.value)} 
                /><br/>
                <label htmlFor="">password</label>
                <input 
                    type="text"
                    id="password"
                    //placeholder="enter password"
                    ref={password}
                    //onChange={(e)=> setPassword(e.target.value)} 
                /><br/>
                <button className="counter">Submit</button>
            </form>
            
        </div>
    );
};