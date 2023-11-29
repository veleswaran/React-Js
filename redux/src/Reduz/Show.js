import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,addList } from "./CounterSlice";
import { useState } from "react";


export default function Count(){
  const list=useSelector((state)=>state.counter.list);
  const [name,setName]=useState('');
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  function handleClick(e){
    e.preventDefault();
    const temp={
      Name:name
    }
    dispatch(addList(temp));


  }
  return(
    <div>
      <form onSubmit={handleClick}>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <input type="submit"/>
      </form>
      <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
      </div>
      {list.map((val,i)=>{
       return <li key={i}>{val.Name}</li>
      })}
    </div>
  )
}