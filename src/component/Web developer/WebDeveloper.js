import React, { useEffect, useState } from 'react';
import SingleDeveloper from '../single-developer/SingleDeveloper';

const FeaturedInstructors = () => {
    const[developer,setDeveloper]=useState([]);
    useEffect(()=>{
        fetch("./DeveloperFakedb.json")
        .then(res=>res.json())
        .then(data=>setDeveloper(data));
    },[])
    return (
        <div className="mt-5 mb-5">
           <h2>Our Web Developer</h2>
           <div className="row row-cols-1 row-cols-md-3 g-4 container ms-5">
               {
                   developer.map(developer=><SingleDeveloper
                   key={developer.id}
                   developer={developer}
                   ></SingleDeveloper>)
               }
           </div>
        </div>
    );
};

export default FeaturedInstructors;