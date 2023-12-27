"use client";

import React from "react";
import styles from "./page.module.css";
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarContent}>
          <div className={styles.logo}>
            <img src="/rajat.png" />
            {/* <Image src="/rajat.png" alt="logo" height={100} width={100}/> */}
          </div>
          <div className={styles.navbarLists}>
            <ul>
              <li><a href="#second"> Skills </a></li>
              <li><a href="#third">Projects</a></li>
              <li><a href="#fifth">Work Ex.</a></li>
              <li><a href="#sixth">Connect</a></li>
            </ul>
          </div>
          <div className={styles.navbarButtons}>
            <button className={styles.firstNavButton}><a href="mailto:rajatvaidhya@gmail.com" target="_blank"> Email </a></button>
            <button className={styles.secondNavButton}><a href="/myresume.pdf" target="_blank" >Resume 📑</a></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
