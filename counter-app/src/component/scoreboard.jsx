import {useState} from 'react';

function Scoreboard() 
{
  let [count,setScore]=useState(0);

  
  return (
    <>
      <h1>Score Board</h1>
      <h2>{score}</h2>
      <button onClick={()=>setScore(score+10)}>Goal</button>
      <button onClick={()=>setScore(score-1)}></button>
    </>
  )

}
export default App
