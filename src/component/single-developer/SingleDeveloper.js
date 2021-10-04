import React from 'react';
import './singleDeveloper.css'

const SingleDeveloper = (props) => {
    const{img,details,name}=props.developer
    return (
        <div class="col">
    <div className="card single-developer">
      <img src={img} className="card-img-top rounded mx-auto d-block mt-3" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">Name: {name}</h3>
        <p className="card-text">{details}</p>
      </div>
    </div>
  </div>
    );
};

export default SingleDeveloper;