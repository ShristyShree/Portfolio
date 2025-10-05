import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

 const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Shristy Shree</h1>
        <p className={styles.description}>
          An aspiring developer and Computer Science undergrad, passionate about coding, problem-solving, and creating meaningful digital experiences. Always eager to learn, build, and grow in the tech world.
        </p>
        <a
          href="mailto:shristyshree0901@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("me.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;