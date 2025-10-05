import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/aboutImage.jpg"; // your image

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={aboutImg} alt="Me coding" />
        </div>
        <div className={styles.text}>
          <p>
            I’m a <strong>second-year Computer Science Engineering student</strong> 
            with a strong passion for <strong>software development</strong> and 
            <strong> problem-solving</strong>. My journey began with programming in 
            <strong> Java</strong>, where I’m currently practicing 
            <strong> Data Structures and Algorithms</strong> to sharpen my logic.
          </p>
          <p>
            I’ve also explored <strong>C, C++ and Python</strong>, which gave me a 
            solid programming foundation. On the web side, I enjoy building projects 
            with <strong>HTML, CSS, JavaScript, and React</strong> to bring creative 
            ideas to life.
          </p>
          <p>
            I’m always eager to <strong>learn, experiment, and collaborate</strong> 
            on real-world projects that challenge me and help me grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
