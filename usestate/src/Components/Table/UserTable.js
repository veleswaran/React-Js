import './User.css';
import Head from './../Headings/Head';

export default function UserTable(props){
    return(
        <table className="table">
            <caption><Head head="Users List"/></caption>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>
            <tbody>
                {props.props.map((val,i)=>{
                    return( 
                        <tr key={i}>
                            <td>{val.Name}</td>
                            <td>{val.Email}</td>
                            <td>{val.Phone}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>  
    )
}