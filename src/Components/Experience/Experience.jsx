import React from "react";
import styles from "./Experience.module.css";

import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/js.png";
import reactIcon from "../../assets/react.png";

const skills = [
  { title: "HTML", image: htmlIcon },
  { title: "CSS", image: cssIcon },
  { title: "JavaScript", image: jsIcon },
  { title: "React", image: reactIcon },
];

const Experience = () => {
  return (
    <section id="skills" className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <img
                src={skill.image}
                alt={skill.title}
                className={styles.skillIcon}
              />
              <p className={styles.skillName}>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
