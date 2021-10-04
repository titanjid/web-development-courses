import React from "react";
import img from "../../images/web-img.jpg";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="d-flex text-start mb-5">
        <div className="ms-5 mt-4">
          <h2>About Our Company</h2>
          <p>
            A health company approached 3 Media Web for help developing a modern
            website. The project included an online store, so 3 Media Web
            Solutions used a WooCommerce platform within WordPress. 3 Media Web
            Solutions was involved in all aspects of the design and development
            process, including ideation, wireframing, backend development, and
            SEO.
          </p>
          <p>
            We wanted to meet a particular deadline and they did everything to
            make sure that everything was working properly and was bench-tested
            before it went live." – Marketing Manager, Health Company.
          </p>
        </div>
        <div className="me-5 ms-5 mt-4">
          <img className="web-img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
