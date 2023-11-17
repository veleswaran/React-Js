import './User.css';
import Head from './../Headings/Head';
import GroceryList from './GroceryList';

export default function GroceryTable({ props, deletefun, bill ,editDataM}) {  
    function saveDetails(data) {
        editDataM(data);
    }

  return (
    <table className="table">
      <caption><Head head="Users List" /></caption>
      <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Tax</th>
            <th>Net Amount</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.map((val) => {
          return (
            <tr key={val.Id}>
                <GroceryList 
                id={val.Id}
                name={val.Name}
                qty={val.Qty}
                price={val.Price}
                total={val.Total}
                tex={val.Tex}
                net={val.Net}
                editData={saveDetails}
                deletefun={deletefun}
                />
            </tr>
          );
        })}
        <tr>
          <td colSpan={5}>Total bill</td>
          <td>{bill}</td>
        </tr>
      </tbody>
    </table>
  );
}
