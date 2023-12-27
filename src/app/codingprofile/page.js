import React from "react";
import "./page.css";
import Image from 'next/image'

const page = () => {
  return (
    <div className="main-coding-profile-section">
      <h2>Coding Profile</h2>

      <div className="coding-profiles">
        
        <div className="codechef-profile">
          <div className="platform-image">
            {/* <Image src="/codechefimage.png" height={100} width={100} alt="image"/> */}
            <img src="/codechefimage.png"></img>
          </div>

          <div className="codechef-bottom">
            <p>Rating - 1612</p>
            <p>Ranking - Inactive</p>
          </div>
        </div>

        <div className="leetcode-profile">
          <div className="platform-image">
          {/* <Image src="/leetcodeimage.png" height={100} width={100} alt="image"/> */}

            <img src="/leetcodeimage.png"></img>
          </div>

          <div className="leetcode-bottom">
            <p style={{marginBottom:'1rem'}}>Solved more than 270+ coding questions.</p>
            <p>Rating - 1510</p>
            <p>Ranking - 300000</p>
          </div>
        </div>

        <div className="hackerrank-profile">
          <div className="platform-image">
          {/* <Image src="/hackerrankimage.png" height={100} width={100} alt="image"/> */}

            <img src="/hackerrankimage.png"></img>
          </div>
          <div className="hackerrank-bottom">
            <p>Certificate in problem solving (Basic).</p>
            <p style={{ marginTop: "1rem" }}>5 star coder.</p>
            <p>Ranking - 300000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
