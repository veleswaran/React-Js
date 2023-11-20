import {useContext, useState } from "react";
import {listContext} from './../UserContext';

export default function UserForm(){
    const {list,setList}=useContext(listContext);
    const [name,setName]= useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [id,setId]=useState(1);
    function handleClick(e){
        e.preventDefault();
        const temp={
            Id:id,
            Name:name,
            Email:email,
            Phone:phone
        }
        setList([...list,temp]);
        setId(id+1);
        setName("");
        setEmail("");
        setPhone("");
    }
    return (
        <form className="form container mb-5 mt-5" onSubmit={handleClick}>
            <label className="form-label">Name</label>
            <input className="form-control" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            <label className="form-label">Email</label>
            <input className="form-control" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <label className="form-label">Phone</label>
            <input className="form-control" type="tel" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
            <input className="btn btn-primary mt-3" type="submit"/>
        </form>
    )
}