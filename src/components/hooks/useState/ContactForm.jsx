import { useState } from "react";

function ContactForm() {
    const [contacts, setContacts] = useState({
        username: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e)=> {
        const {name, value} = e.target;
        setContacts((prev)=>({
            ...prev, [name]: value
        }));
    };

    const handleFormSubmit = function(e){
        e.preventDefault();
        console.log(contacts);
        
    };
    return (
        <div className="mt-15 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <h1>Contact Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username" className="block text-sm/6 font-medium">Username</label>
                    <input 
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={contacts.username}
                        onChange={handleInputChange}
                        //onChange={(e)=> setContacts(e.target.value)}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                        <label htmlFor="email" className="block text-sm/6 font-medium">Email</label>
                    <input 
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={contacts.email}
                        onChange={handleInputChange}
                        //onChange={(e)=> setContacts(e.target.value)}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                        <label htmlFor="message" className="block text-sm/6 font-medium">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        autoComplete="off"
                        value={contacts.message}
                        onChange={handleInputChange}
                        //onChange={(e)=> setContacts(e.target.value)}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        /><br />
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;