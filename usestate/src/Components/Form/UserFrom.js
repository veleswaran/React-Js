import { useState } from "react";
import Table from "../Table/UserTable";
import Head from './../Headings/Head';
import './User.css';

export default function User(){
    const[arr,setArr]=useState([]);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[err,setErr]=useState("");
    let rex = /[a-zA-Z]+$/;
    let phon = /^[9678][0-9]{9}$/;

    function input1(e){
        if((rex.test(e.target.value))){
            setName(e.target.value);
            setErr("");
        }else{
            setErr("invalid input out of alphabet");
        }
    }
    function input2(e){

        setEmail(e.target.value);
    }
    function input3(e){
        if(phon.test(e.target.value)){
            setPhone(e.target.value);
            setErr('');
        }
        else{
            setErr('invalid input of phone number');
        }
    }
    function details(e){
        e.preventDefault();
        let detail={Name:name,Email:email,Phone:phone};
        setArr([...arr,detail]);
        setEmail('');
        setName('');
        setPhone('');
    }
    return (
        <>
            <form onSubmit={details} className="form">
                <Head head="User Form"/>
                <input type="text" value={name}  onChange={input1} className="form-input" placeholder="Enter the Name"/><br/>
                <input type="email" value={email} onChange={input2} className="form-input" placeholder="Enter the email"/><br/>
                <input type="tel" value={phone} onChange={input3} className="form-input" placeholder="Enter the phone"/><br/>
                <input type="submit" className="btn" />
            </form>
            {err}
            <Table props={arr}/>
        </>
    )

}