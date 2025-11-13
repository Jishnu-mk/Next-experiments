import {useEffect} from "react";
let Datafetch=()=>
{
    useEffect(()=>
        {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(data=>setUsers(data))
           
},[])
return(
    <>
    <h2>Data Fetching</h2>
    <ul>
    {Users.map((user)=>(<li>{user.name}</li>))}
    </ul>
     <button>Fetch</button>
    </>
)
}
export default Datafetch;