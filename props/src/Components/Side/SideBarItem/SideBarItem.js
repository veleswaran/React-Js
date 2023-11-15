import './SideBarItem.css';

export default function SideBarItem({val="daulft",color="red"}){

    return(
        <div className="sideBar" style={{backgroundColor:color}}>
            {val}
          
        </div>
    )

}