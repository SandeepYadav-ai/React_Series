import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import UseState from './components/hooks/UseState';

function App(){
  // let [counter, setCounter] = useState(0)
  // let username = "sandeep";
  let myObj = {
      name:"pradeep",
      age:27,
    }
  // //let counter = 13;
  // const addValue = ()=> {
  //   //console.log("clicked",counter);
  //   //let counter = counter + 1; it is also working
  //   if(counter<20){
  //   setCounter(counter + 1);
  //   }
  // }
  // let removeValue = function() {
  //   if(counter>0) {
  //   setCounter(counter - 1); 
  //   }
    
  // }

  return(
    <>
    {/* <h1>hello react {username}</h1>
    <h2>counter value :{counter}</h2>
    <section>
    <button className="counter" onClick={addValue}>add value {counter}</button>
    <br />
    <button className="counter" onClick={removeValue}>remove value {counter}</button>
    <p className="text-3xl font-bold underline text-green-500">footer:-{counter}</p>
    </section>
    <Card username="sandeep" btn="read more" someobj = {myObj} />
    <Card username="ashok" btn="toVist"/> */}
    <UseState/>
    </>
  )
}
export default App;