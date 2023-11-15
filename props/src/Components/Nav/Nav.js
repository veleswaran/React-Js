import NavItem from "./Nav-item/NavItem";
import './Nav.css';

export default function Nav (){
    const navItem=[
        'HTML',
        'CSS',
        'JAVASCRIPT',
        'JAVA',
        'PHP',
        'PYTHON',
        'NODE JS',
        'REACT JS',
        'BOOTSTRAP',
        'JQUERY',
        'C++',
        'C',
        'C#',
        'TYPESCRIPT'
    ]
    return(
        <div className="nav">
            {navItem.map((val)=>{
               return  <NavItem val={val}/>
            })}
        </div>

    )
}