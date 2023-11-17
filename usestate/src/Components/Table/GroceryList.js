import { useEffect, useState } from "react"

export default function GroceryList({id,name,qty,price,total,tex,net,deletefun,editData}){
    const [isEdit,setIsEdit]=useState(false);
    const [Item, setItem] = useState({Id:id,Name:name,Qty:qty,Price:price,Total:total,Tex:tex,Net:net});

    useEffect(()=>{
        setItem((Item)=>({...Item,Total:Item.Qty*Item.Price}));
    }, [Item.Qty, Item.Price]);
    useEffect(()=>{
        setItem((Item)=>({...Item,Tex:Item.Qty*Item.Price*0.18}));
    }, [Item.Qty, Item.Price]);
    useEffect(()=>{
        setItem((Item)=>({...Item,Net:Item.Total+Item.Tex}));
    }, [Item.Tex, Item.Price]);

    function saveDetails() {
        let updatedItem = {
            ...Item,
            Total: Item.Qty * Item.Price,
            Tex: Item.Qty * Item.Price * 0.18,
            Net: (Item.Qty * Item.Price) + (Item.Qty * Item.Price * 0.18)
        };
    
        setIsEdit(!isEdit); // Toggle isEdit
    
        setItem(updatedItem);
        editData(updatedItem);
    }
    

    
    return(
        <>
            <td>{isEdit ? <input type='text' value={Item.Id}  onChange={(e) => setItem({ ...Item, Id: e.target.value})} /> :id}</td>
            <td>{isEdit ? <input type='text' value={Item.Name}  onChange={(e) => setItem({ ...Item, Name: e.target.value})} /> :name}</td>
            <td>{isEdit ? <input type='number' value={Item.Qty}  onChange={(e) => setItem({ ...Item, Qty: e.target.value })} /> :qty}</td>
            <td>{isEdit ? <input type='number' value={Item.Price} onChange={(e) => setItem({ ...Item, Price: e.target.value })} /> :price}</td>
            <td>{isEdit ? <input type='number' disabled value={Item.Total} /> :total}</td>
            <td>{isEdit ? <input type='number' disabled value={Item.Tex} /> :tex}</td>
            <td>{isEdit ? <input type='number' disabled value={Item.Net} /> :net}</td>
            <td>
                <button onClick={() => deletefun(id)} className="btn">Delete</button>
                <button onClick={saveDetails} className="btn">{isEdit ? 'Save' : 'Edit'}</button>
            </td>
        </>
    )

}