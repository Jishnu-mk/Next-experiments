import { useState } from 'react'
import './App.css'

function App() 
{
 useEffect(()=>{
  console.log("data fetched");
 },[])

  return (
    <>
     <h1>API APP</h1>
     <button onClick={()=>setRefresh(refresh+1)}>Refresh</button>
     </>
  )
  
}

export default App
