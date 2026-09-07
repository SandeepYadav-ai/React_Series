import { useState } from "react";

 const RegistrationForm = function() {
    const [user, setUser] = useState({
        firstName:"",
        lastname:"",
        email:"",
        password:"",
        phoneNumber:""
    });

    const handleInputChange = (e)=> {
        const {name, value} = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = function(event) {
        event.preventDefault();
        console.log(user);
        
    }
    return(
        <>
        <form onSubmit={handleFormSubmit}>
        <div>
            <h1>Sign Up</h1>
            <p>Please fill in this form to creat an account!</p>
            <label htmlFor="firstName" className="block text-sm/6 font-medium">
                <b>First Name</b>
            </label>
            <input 
                type="text"
                name="firstName"
                placeholder="Enter first name"
                required
                value={user.firstName}
                onChange={handleInputChange}
                className="rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
             />

             <label htmlFor="lastname" className="block text-sm/6 font-medium">
                <b>Last Name</b>
             </label>
             <input 
                type="text"
                name="lastname"
                placeholder="Enter last name"
                required
                value={user.lastname}
                onChange={handleInputChange}
                className="rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />

              <label htmlFor="email" className="block text-sm/6 font-medium">
                <b>Email</b>
                </label>
                <input 
                    type="text"
                    name="email"
                    placeholder="Enter the email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />

                    <label htmlFor="password" className="block text-sm/6 font-medium">
                        <b>Password</b>
                    </label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        value={user.password}
                        onChange={handleInputChange}
                        className="rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                     />

                     <label htmlFor="phoneNumber" className="block text-sm/6 font-medium">
                        <b>Phone Number</b>
                     </label>
                     <input 
                        type="number"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                        className="rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                        <p>
                            By creating an account you agree to our
                            <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                            </a>
                        </p>

                        <div className="clearfix">
                            <button type="submit" className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold inset-ring hover:bg-white/20">
                            Sign Up
                            </button>
                        </div>
                        </div>
                    </form>

                    <section
                        className="summary"
                        style={{ textAlign: "center", marginTop: "30px" }}
                    >
                        <p>
                        Hello, my name is
                        <span>
                            {user.firstName} {user.lastName}
                        </span>
                        . My email address is <span>{user.email}</span> and my phone number is
                        <span>{user.phoneNumber}</span>.
                        </p>
                    </section>
                </>
            );
        };

export default RegistrationForm;