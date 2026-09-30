import './App.css'
import Card from './components/hooks/useState/Card';
import UseState from './components/hooks/useState/UseState';
import LiftStateUp from './components/hooks/useState/LiftStateUp';
import DerivedState from './components/hooks/useState/DerivedState';
import ShortCircuit from './components/hooks/useState/ShortCircuit';
import RegistrationForm from './components/hooks/useState/RegistrationReact';
import LoginForm from './components/hooks/useState/LoginForm';
import ContactForm from './components/hooks/useState/ContactForm';
import UseEffect from './components/hooks/useEffect/UseEffect';
import EffectChanllenge from './components/hooks/useEffect/effectChallenge';
import CleanUpEffect from './components/hooks/useEffect/cleanupEffect';
import { FetchApi } from './components/hooks/useEffect/PokemonApi';
import { UseRef } from './components/hooks/useRefs/UseRef';
import { UseId } from './components/hooks/useId/UseId';
import { PropDrilling } from './components/hooks/PropDrilling';
import { Home } from './components/hooks/ContextApi/home';
import { BioProvider } from './components/hooks/ContextApi';
import { About } from './components/hooks/ContextApi/About';
import { Service } from './components/hooks/ContextApi/Service';
import { DarkLight, ThemeProvider } from './components/hooks/ContextApi/DarkLight';

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
    <Card username="ashok" btn="toVist"/>
    <UseState/>
    <LiftStateUp />
    <DerivedState />
    <ShortCircuit />
    <RegistrationForm />
    <LoginForm />
    <ContactForm />
    <UseEffect />
    <EffectChanllenge />
    <CleanUpEffect />
    <FetchApi />
    <UseRef />
    <UseId />
    <PropDrilling />
    <BioProvider>
      <Home />
      <About />
      <Service />
    </BioProvider> */}
    <ThemeProvider>
      <DarkLight />
    </ThemeProvider>
    </>
  );
};
export default App;