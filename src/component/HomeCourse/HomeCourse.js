import React, { useEffect, useState } from 'react';
import SingleHomeCrouse from './SingleHomeCrouse';

const HomeCourse = () => {
    const [course,setCourse]=useState([]);
    useEffect(()=>{
        fetch("./Homefakedb.json")
        .then(res=> res.json())
        .then(data =>setCourse(data));
    },[])
    return (
        <div className="mt-5">
            <h2>Our Course</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container ms-5 mb-5">
                {
                    course.map(course=><SingleHomeCrouse
                    key={course.id}
                    course={course}
                    ></SingleHomeCrouse>)
                }
            </div>
        </div>
    );
};

export default HomeCourse;