import React from "react";
import styles from "./page.module.css";
import Navbar from "./navbar/page";
import SkillSection from "./skills/page";
import ProjectsSection from "./projects/page";
import CodingProfile from "./codingprofile/page";
import Experience from "./experience/page";
import Sixth from './sixth/page'

const page = () => {
  return (
    <>
      <Navbar />
      <section id="first" className={styles.first}>
        <div className={styles.head}>
          <p className={styles.headingText}>
            Hello 👋, <br></br>I am{" "}
            <span className={styles.headingTextSpan}>Rajat Vaidhya</span>
          </p>
          <p className={styles.description}>
            An aspiring software engineer with the ability to grow as an
            individual and learn in the surrounding of talented people.
          </p>

          <button className={styles.hireMeButton}><a href="mailto:rajatvaidhya@gmail.com">Hire me!</a></button>
        </div>

        <div className={styles.snowflake}>❅</div>
        <div className={styles.snowflake}>❅</div>
        <div className={styles.snowflake}>❆</div>
        <div className={styles.snowflake}>❄</div>
        <div className={styles.snowflake}>❅</div>
        <div className={styles.snowflake}>❆</div>
        <div className={styles.snowflake}>❄</div>
        <div className={styles.snowflake}>❅</div>
        <div className={styles.snowflake}>❆</div>
        <div className={styles.snowflake}>❄</div>
      </section>

      <section id="second">
        <SkillSection />
      </section>

      <section id="third">
        <ProjectsSection />
      </section>

      <section id="fourth">
        <CodingProfile />
      </section>

      <section id="fifth">
        <Experience />
      </section>

      <section id="sixth">
        <Sixth/>
      </section>
    </>
  );
};

export default page;
