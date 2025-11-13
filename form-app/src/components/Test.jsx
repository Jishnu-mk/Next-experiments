import { useRef,useState} from "react"
export default function Test()
{
    let normalcount=0
    let count=useRef(0)//useRef for storing number value
    const [refresh,setRefresh]=useState(0)
    function increase()
    {
        count.current=count.current+1
        console.log("ref=",count.current);
        normalcount++
        console.log("normal=",normalcount);
    }
    return(
        <>
        <h2>useRef for storing values</h2>
        <h2>Ref Value - {count.current}</h2>
        <h2>Normal Value - {normalcount}</h2>
        <h2>State Value - {refresh}</h2>
        <button onClick={increase}>Increment</button>
        <button onClick={()=>setRefresh(refresh+1)}>Refresh</button>
        </>
    )
}