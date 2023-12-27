import React from "react";
import "./page.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="skills-container">
      {/* <Image src="/home-experts-bg.svg" height={0} width={0} alt="image"/> */}
      <img className="skills-container-bg-img" src="/home-experts-bg.svg"></img>

      <div className="skills-content">
        <h1>skills.</h1>

        <div className="skills-content-tags">
          <div>Frontend Development</div>
          <div>Backend Development</div>
          <div>Competitive Programming</div>
        </div>

        <div className="skills-content-logos marquee">
          <div>
            {/* <Image src="/htmllogo.png" height={100} width={100} alt="image" /> */}
            <img src="/htmllogo.png"></img>
          </div>
          <div>
            {/* <Image src="/csslogo.png" height={100} width={100} alt="image" /> */}

            <img src="/csslogo.png"></img>
          </div>
          <div>
            {/* <Image src="/jslogo.png" height={100} width={100} alt="image" /> */}

            <img src="/jslogo.png"></img>
          </div>
          <div>
            {/* <Image src="/reactlogo.png" height={100} width={100} alt="image" /> */}

            <img src="/reactlogo.png"></img>
          </div>
          <div>
            {/* <Image src="/nodejslogo.png" height={100} width={100} alt="image" /> */}

            <img src="/nodejslogo.png"></img>
          </div>
          <div>
            {/* <Image
              src="/mongodblogo.png"
              height={100}
              width={100}
              alt="image"
            /> */}

            <img src="/mongodblogo.png"></img>
          </div>
          <div>
            {/* <Image
              src="/expresslogo.png"
              height={100}
              width={100}
              alt="image"
            /> */}

            <img src="/expresslogo.png"></img>
          </div>
          <div>
            {/* <Image
              src="/bootstraplogo.png"
              height={100}
              width={100}
              alt="image"
            /> */}

            <img src="/bootstraplogo.png"></img>
          </div>
          <div>
            {/* <Image src="/nextjslogo.png" height={100} width={100} alt="image" /> */}

            <img src="/nextjslogo.png"></img>
          </div>
          <div>
            {/* <Image src="/cpplogo.png" height={100} width={100} alt="image" /> */}

            <img src="/cpplogo.png"></img>
          </div>
          <div>
            {/* <Image src="/githublogo.png" height={100} width={100} alt="image" /> */}

            <img src="/githublogo.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
