import React from "react";
import "./page.css";
import Image from 'next/image'

const page = () => {
  return (
    <div className="main-projects-section">
      <h2 className="project-section-heading">Some noteworthy projects</h2>

      <div className="project-cards">
        <div className="project-card">
          <div className="project-image">
            {/* <Image src="/eventlabsimage.png" alt="project-image" height={100} width={100}/> */}
            <img src="/eventlabsimage.png"></img>
          </div>
          <div className="project-name">
            <h2>Eventlabs</h2>
          </div>
          <div className="project-card-bottom">
            <p>&#12539;Live</p>

            <a href="https://eventlabs-frontend.vercel.app">
              <div>Visit</div>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
          {/* <Image src="/paperkartimage.png" alt="project-image" height={100} width={100}/> */}

            <img src="/paperkartimage.png"></img>
          </div>
          <div className="project-name">
            <h2>Paperkart</h2>
          </div>
          <div className="project-card-bottom">
            <p>&#12539;Live</p>

            <a href="https://paperkart.netlify.app">
              <div>Visit</div>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
          {/* <Image src="/inotebookimage.png" alt="project-image" height={100} width={100}/> */}

            <img src="/inotebookimage.png"></img>
          </div>
          <div className="project-name">
            <h2>iNotebook</h2>
          </div>
          <div className="project-card-bottom">
            <p>&#12539;Live</p>

            <a href="https://inotebookcloud.netlify.app">
              <div>Visit</div>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
          {/* <Image src="/shremishimage.png" alt="project-image" height={100} width={100}/> */}

            <img src="/shremishimage.png"></img>
          </div>
          <div className="project-name">
            <h2>Shremish</h2>
          </div>
          <div className="project-card-bottom">
            <p>&#12539;Live</p>

            <a href="https://shremish.netlify.app">
              <div>Visit</div>
            </a>
          </div>
        </div>


        <div className="project-card">
          <div className="project-image">
          {/* <Image src="/portfolioimage.png" alt="project-image" height={100} width={100}/> */}

            <img src="/portfolioimage.png"></img>
          </div>
          <div className="project-name">
            <h2>Portfolio</h2>
          </div>
          <div className="project-card-bottom">
            <p>&#12539;Live</p>

            <a href="https://shremish.netlify.app">
              <div>Visit</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
