import { useState } from "react";

const LoginForm = ()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = function(e) {
        e.preventDefault();

        const loginData = {
            username : username,
            password : password
        }
        console.log(loginData);
        
    }
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <h1>Login form</h1>
                
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username" className="block text-sm/6 font-medium">Username</label>
                    <input 
                        type="text"
                        name="username"
                        autoCapitalize="off"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                     />
                <label htmlFor="password" className="block text-sm/6 font-medium">Password</label>
                    <input 
                        type="password"
                        name="password"
                        autoCapitalize="off"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                     /><br/>
                     <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;