import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} style={{color: 'var(--color-primary)'}}>
          Hi, I'm Pacifique
        </h1>
        <p 
          className={styles.description}
          style={{fontSize:'21px', lineHeight:'1.6'}}
        >
          👨‍💻I'm a full-stack developer with expertise in React, Node.js, Java, Python, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, PostgreSQL, MySQL, MongoDB, Docker, and Firebase!
          I specialize in backend development, API design, cloud computing, and database management ☁️, with hands-on experience in system monitoring, software security, and performance optimization 🚀.
          My frontend skills ensure seamless UI/UX design and responsive web applications📱. Passionate about AI, automation, and scalable software solutions, I constantly explore innovative technologies to enhance efficiency and security.
          Let's connect, innovate, and build something impactful! 💻
        </p>
        <div className={styles.buttons}>
          <a href="mailto:myemail@email.com" className={styles.contactBtn} style={{fontSize:'22px'}}>
            Contact Me
          </a>
          <a
            href="/MUGISHA PACIFIQUE.pdf"
            download="MUGISHA PACIFIQUE.pdf"
            className={styles.downloadBtn}
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        style={{
          borderRadius: '20%'
        }}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};