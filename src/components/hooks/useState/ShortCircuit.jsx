import { useState } from "react";

const ShortCircuit = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState("");
    return (
        <section>
            <h1>Welcom to ShortCircuit evalution!</h1>

            {/* Conditional rendering using short circuit evaluation */}
            {isLogin && <p>you are logined!</p>}

            {/* Another example of short circuit evaluation */}
            {user ? `hello ${user}` : "Pls login!"}

            <div>
                <button className="counter" onClick={()=> setIsLogin(!isLogin)}>Toggle login</button>
                <input type="password" 
                placeholder="enter your name" 
                value={user} 
                onChange={(e)=> setUser(e.target.value)} />
                <button className="counter" onClick={()=> setUser("sandeep yadav")}>Set user</button>
                <button className="counter" onClick={()=> setUser("")}>clear user</button>
            </div>
        </section>
    )
}

export default ShortCircuit;