import {useState} from 'react';
import './App.css'

function App() 
{
  let [count,setCount]=useState(0);
  //let callSetCount=()=>setCount(10)
  
  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )

}
export default App
