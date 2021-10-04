import React from "react";
import Sponsors from "../Sponsors/Sponsors";
import Course from "../Course-Categories/Course";
import img from "../../images/images.jpg";
import HomeCourse from "../HomeCourse/HomeCourse";

const Home = () => {
  return (
    <div>
      <div className="d-flex ms-5">
        <div className="mt-1">
          <img src={img} alt="" />
        </div>
        <div className="mt-5 ms-2">
          <h2>Learn web development</h2>
        </div>
      </div>
      <div className="text-start ms-5 mt-4">
        <h2>What is Web Development?</h2>
        <p>
          Web development is everything involved in the creation of a website.
          Typically it refers to the coding and programming side of web site<br/>
          production as opposed to the web design side. It encompasses
          everything from a simple page of HTML text to complex, feature-rich<br/>
          applications designed to be accessed from various Internet-connected
          devices.
        </p>
        <h2>Online Web Development Courses</h2>
        <p>
          It makes perfect sense that one can learn how to build websites
          entirely online. From HTML tutorials to in-depth courses in responsive<br/>
          web design that combine HTML, CSS and JavaScript, individuals can
          learn the latest client and server-side coding practices. Discover the<br/>
          latest web design software and online web design courses including
          self-paced web programming courses taught by experts from Intel and<br/>
          the World Wide Web Consortium (W3C), the organization that develops
          and maintains web standards and guidelines. Pursue free online HTML<br/>
          courses or enroll in an advanced professional certificate program in
          web development, a multi-course specialization designed to jumpstart<br/>
          your career in this exciting and lucrative field.
        </p>
        <h2>Jobs in Web Development</h2>
        <p>
          Over 5,000 active job postings for web developers existed on
          Indeed.com at the time of this article, with an estimated average<br/>
          annual salary of over $91K in the United States. The average annual
          salary for front end web developers is even higher, at $102K.<br/>
          Practically every organization in existence is finding and interacting
          with people via the web, making the position of web developer one of<br/>
          the most sought after.
        </p>
      </div>
      <HomeCourse></HomeCourse>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Home;
