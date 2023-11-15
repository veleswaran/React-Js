import SideBarItem from './../SideBarItem/SideBarItem';
import './SideBar.css';
import Head from './../../Headings/Head';

export default function SideBar(){
    const content1 =[
        'Agro Chemicals',
        'Air Transport service',
        'Alcoholic Beverage',
        'Auto Ancillaries',
        'Automobile',
        'Banks',
        'Bearings',
        'Cables',
        'Capital Goods - Electrical Equipment',
        'Capital Goods-Non Electrical',
        'Castings,Forgings& Fastners',
        'Cement',
        'Cement-Products',
        'Ceramic Products',
        'Chemicals'
    ]
    const list=[{title:"title 1",display:true,color:"green"},{title:"title 2",display:true,color:"green"},{title:"title 3",display:false},{title:"title 4",display:false},{title:"title 5"},{}]
    return (
        <div className="side-bar">
            <Head head='Browse Sectors'/>
            {list.map((val)=>{
                return <SideBarItem val={val.title} color={val.color}/>
            })}
        </div>
    )
}