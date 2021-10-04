import React from 'react';
import './singleCourse.css'

const SingleCourse = (props) => {
    const {title,img,details,price}=props.course
    return (
        <div className="col">
        <div className="card single-course">
          <img src={img} className="card-img-top rounded mx-auto d-block mt-3" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Course Name: {title}</h3>
            <h5>Price: ${price}</h5>
            <p className="card-text">{details}</p>
          </div>
        </div>
      </div>
    );
};

export default SingleCourse;