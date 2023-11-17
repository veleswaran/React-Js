import { useState,useEffect } from "react";
import Table from "../Table/GroceryTable";
import Head from './../Headings/Head';
import './User.css';

export default function GroceryForm(){
    const[arr,setArr]=useState([]);
    const[id,setId]=useState(1);
    const[name,setName]=useState("");
    const[qty,setQty]=useState("");
    const[price,setPrice]=useState("");
    const[tex,setTex]=useState("");
    const[total,setTotal]=useState("");
    const[nettotal,setNetTotal]=useState("");
    const[bill,setBill]=useState(0);

    useEffect(()=>{
        setTotal(qty*price);
    },[price]);
    useEffect(()=>{
        setTex(total*0.18);
    },[total]);
    useEffect(()=>{
        setNetTotal(tex+total);
        
    })
    useEffect(() => {
        const totalBill = arr.reduce((acc, item) => acc + item.Net, 0);
        setBill(totalBill);
    }, [arr]);

    function ProName(e){
       setName(e.target.value);
       
    }
    function ProQty(e){
        setQty(e.target.value);
    }
    function ProPrice(e){  
        setPrice(e.target.value);
    }
    function details(e){
        e.preventDefault();
        setId(id+1);
        let detail={Id:id,Name:name,Qty:qty,Price:price,Tex:Math.floor(tex),Total:total,Net:nettotal};
        setArr([...arr,detail]);
        setQty('');
        setName('');
        setPrice('');
    }
    function deletefun(id){
        setArr(arr.filter((val)=>val.Id!==id));
    }
    function editedData(Item){
        console.log(Item);
        setArr(arr.map((val)=>val.Id=== Item.Id ? Item : val));
    }
    return (
        <>
            <form onSubmit={details} className="form">
                <Head head="User Form"/>
                <input type="text" value={name}  onChange={ProName} className="form-input" placeholder="Enter the Name"/><br/>
                <input type="number" value={qty} onChange={ProQty} className="form-input" placeholder="Enter the Qundity"/><br/>
                <input type="number" value={price} onChange={ProPrice} className="form-input" placeholder="Enter the Price"/><br/>
                <input type="submit" className="btn" />
            </form>
           
            <Table props={arr} deletefun={deletefun}  bill={bill} editDataM={editedData}/>
        </>
    )

}