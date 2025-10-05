import React from "react";
import styles from "./Projects.module.css";

// Import images
import expenseImg from "../../assets/expense.png";
import tictactoeImg from "../../assets/tictactoe.png";
import eventImg from "../../assets/event.jpg";

const projects = [
  {
    title: "Expense Splitter",
    description:
      "A simple app to split expenses among friends and calculate each share automatically. Learned DOM manipulation and basic JavaScript logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://shristyshree.github.io/expense-splitter/", // Replace with live link or GitHub
    image: expenseImg
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe game for two players. Practiced event handling, game logic, and state management in JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://shristyshree.github.io/TicTacToe/", // Replace with live link or GitHub
    image: tictactoeImg
  },
  {
    title: "Event Attendance QR Generator",
    description:
      "A project to generate QR codes for event attendance. Even though scanning isn’t fully functional yet, it demonstrates my understanding of React, state management, and QR code libraries.",
    tech: ["React", "JavaScript", "QRCode.js"],
    link: "https://event-attendance-m6rq.vercel.app/", // Replace with GitHub or live demo
    image: eventImg // You can replace this with a placeholder or a screenshot
  }

];

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
