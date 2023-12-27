import React from "react";
import "./page.css";
import Image from 'next/image'

const page = () => {
  return (
    <div className="meetSection">
      <div className="insideMeet">
        <div className="heartsSvg">
          {/* <Image src="/hearts.svg" height={100} width={100} alt="image"/> */}
          <img src="/hearts.svg"></img>
        </div>
        <div className="meetText">
          <h2>Sold yet?</h2>
          <p>
            Thanks for stopping by, I’m currently looking to join a new team of
            creative designers and developers. If you think we might be a good
            fit for one another, send me an{" "}
            <a
              href="mailto:rajatvaidhya@gmail.com"
              style={{ color: "purple", textDecoration: "underline" }}
            >
              Email.
            </a>
          </p>
        </div>
      </div>

      <div className="follows">
        <div>
          <a href="https://linkedin.com/in/rajatvaidhya">
          {/* <Image src="/linkedin.png" height={100} width={100} alt="image"/> */}

            <img src="/linkedin.png"></img>
          </a>
        </div>
        <div>
          <a href="https://instagram.com/rajatvaidhyaa">
          {/* <Image src="/instagram.png" height={100} width={100} alt="image"/> */}

            <img src="/instagram.png"></img>
          </a>
        </div>
        <div>
          <a href="tel:7879278953">
          {/* <Image src="/whatsapp.png" height={100} width={100} alt="image"/> */}

            <img src="/whatsapp.png"></img>
          </a>
        </div>
        <div>
          <a href="https://github.com/rajatvaidhya">
          {/* <Image src="/github2.png" height={100} width={100} alt="image"/> */}

            <img src="/github2.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
