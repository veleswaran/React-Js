export default function StudentDetails({props:{phone,email,address}}){
    console.log("details");
    console.log(phone);
    return (
        <div className='details'>   
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
        </div>
    )
}