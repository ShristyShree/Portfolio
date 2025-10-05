import React from "react";
import styles from "./Contact.module.css";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const contacts = [
  {
    icon: <AiOutlineMail />,
    label: "Email",
    link: "mailto:shristyshree0901@gmail.com",
  },
  {
    icon: <AiFillGithub />,
    label: "GitHub",
    link: "https://github.com/ShristyShree",
  },
  {
    icon: <AiFillLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/shristy-shree-26464035b/",
  },
  {
    icon: <AiFillInstagram />,
    label: "Instagram",
    link: "https://www.instagram.com/shris.tea09/",
  }
];

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.description}>
          I’m always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className={styles.contactLinks}>
          {contacts.map((c, index) => (
            <a
              key={index}
              href={c.link}
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>{c.icon}</span> {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
