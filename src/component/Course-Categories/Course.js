import React, { useEffect, useState } from 'react';
import SingleCourse from '../Single-Course/SingleCourse';

const Course = () => {
    const [course,setCoruse]=useState([]);
    useEffect(()=>{
        fetch("./Coursefakedb.json")
        .then(res=> res.json())
        .then(data =>setCoruse(data));
    },[])
    return (
        <div className="mt-5">
            <h2>Our Course</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container ms-5 mb-5">
                {
                    course.map(course=><SingleCourse
                    key={course.id}
                    course={course}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Course;