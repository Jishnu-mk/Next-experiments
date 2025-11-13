import { useState } from "react";
function Form1() 
{ 
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")

  function handleSubmitt(e)
  {
    e.preventDefault()
    console.log("form submitted");
    console.log("Username: ",name,"password: ",password);
  }
 
  return (
    <>
     <h2>Form in React</h2>
     <form onSubmitt={handleSubmitt}>
      <label>Name </label>
      <input type="text" onChange={(e)=>setName(e.target.value)}></input><br></br>
      <label>Password</label>
      <input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      <button type="submitt">Login</button>

       </form>
    </>
  )
}

export default Form1
