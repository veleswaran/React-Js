import { useContext } from "react";
import {listContext} from './../UserContext';

export default function UserList(){
    let {list}=useContext(listContext);
    return(
        <table className="table container bg-info">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>
            <tbody>
            {list.map((val)=>{
                return(<tr key={val.Id}>
                    <td>{val.Id}</td>
                    <td>{val.Name}</td>
                    <td>{val.Email}</td>
                    <td>{val.Phone}</td>
                </tr>)
            })}
            </tbody>
        </table>
    )
}