import { useState } from "react";

function DerivedState() {
    const [users, setUser] = useState([
        {name:'sandeep', age:20},
        {name:'pradeep', age:25},
        {name: 'ashok', age: 30},
        {name: 'riya', age: 30}
            ])

const countUsers = users.length;
const average = users.reduce((pre, curr) => pre + curr.age,0)/countUsers;          
    return (
        <>
        <h1>user list </h1>
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name} {user.age} years
                </li>
            ))}
        </ul>
        <p className="font-bold">total uaer {countUsers}</p>
        <p className="font-bold">average of age {average}</p>
        </>
    )
}

export default DerivedState;