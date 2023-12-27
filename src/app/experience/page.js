import React from "react";
import "./page.css";

const page = () => {
  return (
    <div className="main-experience-section">
      <h2 className="ex-heading">Where I&apos;ve worked</h2>

      <div className="ex-cards">
        <div className="tapop-card">
          <h2>Tapop</h2>
          <p>Frontend Development Intern</p>
          <p>
            Refactor and Redesigned the offcial website of Tapop. Created some
            responsive web components like Profile cards, Home page, Client
            dashboard etc. through MERN Stack technology.
          </p>
        </div>

        <div className="industry-card">
          <h2>ThinkNEXT</h2>
          <p>Industrial Trainee</p>
          <p>
            I had the opportunity to enhance my skills and knowledge in web
            development. Throughout the training, I focused on mastering various
            cutting-edge technologies such as MongoDB, ReactJS, NodeJS, and
            ExpressJS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
