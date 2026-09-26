import { useId } from "react";

export const UseId = function() {
    const usernameId = useId();
    const emailId = useId();
    const passwordId = useId();


    return(
        <form action="">
            <div>
                <label htmlFor={usernameId}>Username:</label>
                <input type="text" id={usernameId} name="name" />
            </div>
            <div>
                <label htmlFor={emailId}>Email:</label>
                <input type="email" id={emailId} name="email" />
            </div>
            <div>
                <label htmlFor={passwordId}>Password:</label>
                <input type="password" id={passwordId} name="password" />
            </div>
            <button className="counter">Submit</button>
        </form>
    );
};