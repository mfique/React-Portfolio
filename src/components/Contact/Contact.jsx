import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 style={{fontSize:'45px'}}>Contact</h2>
        <p style={{fontSize:'20px'}}>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=pacifiquem58@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <span style={{fontSize:'25px'}}>   Email</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/mugisha-pacifique-142b0931b/" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <span style={{fontSize:'25px'}}>  Linkedin</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/mfique" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <span style={{fontSize:'25px'}}> Github</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
