import Student from "../Student/Student";
import './StudentList.css';

export default function StudentList(){
    const student=[
        {
            name:'veleswaran',
            details:{
                phone:9361172225,
                email:"vels344@gamil.com",
                address:'theni'
            },
            house:'legacy'
        },
        {
            name:'savithadevi',
            details:{
                phone:9655379781,
                email:"savithamayan@gamil.com",
                address:'tirupur'
            },
            house:'legacy'
        },
        {
            name:'monisa',
            details:{
                phone:9361172225,
                email:"monisa@gamil.com",
                address:'theni'
            },
            house:'forbidden'
        },
        {
            name:'mohan',
            details:{
                phone:9361172225,
                email:"dmohan6001@gamil.com",
                address:'chennai'
            },
            house:'warrior'
        }, 
        {
            name:'praveen',
            details:{
                phone:5784937945,
                email:"pkpraveen3002@gamil.com",
                address:'peruntholuvu'
            },
            house:'airforce'
        }
    ];
    return (
        <div className="stdli">
            {student.map((val)=>{
                return <Student props={val}/>
            })}
        </div>
    )
}