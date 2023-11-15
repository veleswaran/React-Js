import React from 'react';
import Head from './../../Headings/Head';
import StudentDetails from '../StudentDetails/StudentDetails';
import './Student.css';

export default function Student({ props: { name, details,house } }) {
    console.log(name);
    const houses={
        legacy:"green",
        forbidden:"red",
        warrior:'blue',
        airforce:'white'

    };
    return (
        <div style={{backgroundColor:houses[house]}} className='std'>
            <Head head={name} />
            <StudentDetails props={details} />
        </div>
    );
}





