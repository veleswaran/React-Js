import { useState } from "react";
export default function Form() {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [edit,setedit] = useState(0);
  let [id,setId]=useState(1)

  function handlechange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      id:(edit>0 && edit<id)?product.id:id,
      product: product.product,
      qty: product.qty,
      price: product.price,
      total: product.price * product.qty,
    };
   
    if(edit>0 && edit<id){
      setProducts(products.map((val)=>val.id == product.id ?obj:val))
      setedit(0)
    }else{
      setProducts([...products, obj]);
      setId(id+=1);
    }
    setProduct({product: "", qty: "", price: "", });
  }

  function handleDelete(id){
    setProducts(products.filter((val)=>val.id !== id))
  }

  function handleEdit(id){
    setedit(id);
    setProduct(products.filter((val)=>val.id === id)[0])
  }


  return (
    <div class="container mt-3">
      <h2>Stacked form</h2>
      <form onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
          <label for="email">Product:</label>
          <input
            type="text"
            class="form-control"
            id="product"
            placeholder="Enter product"
            name="product"
            onChange={handlechange}
            value={product.product}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="email">Quantity:</label>
          <input
            type="number"
            class="form-control"
            id="aty"
            placeholder="Enter Quantity"
            name="qty"
            onChange={handlechange}
            value={product.qty}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="email">Price:</label>
          <input
            type="number"
            class="form-control"
            id="price"
            placeholder="Enter price"
            name="price"
            onChange={handlechange}
            value={product.price}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <table class="table table-dark mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {products&& products.map((val,index)=>
               <tr key={index}>
                <td>{val.id}</td>
               <td>{val.product}</td>
               <td>{val.qty}</td>
               <td>{val.price}</td>
               <td>{val.total}</td>
               <td>
                <a className="btn btn-danger" onClick={()=>handleDelete(val.id)}>Delete</a>
                <a className="ms-2 btn btn-warning" onClick={()=>handleEdit(val.id)}>Edit</a>
               </td>
             </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}
