import React from "react";
import styles from "./Contact.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import classNames from "classnames";

export default function Contact() {
  return (
    <div id="contact-section" className={styles.contact}>
      <h2>CONTACT ME</h2>
      <div className={styles.contactBox}>
        <div className={styles.sendEmail}>
          <span className={styles.spantitle}>Send me an Email:</span>
          <ContactForm />
        </div>
        <div className={styles.socialnetwork}>
          <span className={styles.spantitle}>Get to know me more:</span>
          <ul className={styles.wrapper}>
            <li className={classNames(styles.icon, styles.linkedin)}>
              <span className={styles.tooltip}>Linkedin</span>
              <a target="_blank" href="https://www.linkedin.com/in/sol-lanosa/">
                <span>
                  <i class="fab fa-linkedin"></i>
                </span>
              </a>
            </li>
            <li className={classNames(styles.icon, styles.github)}>
              <span className={styles.tooltip}>Github</span>
              <a target="_blank" href="https://github.com/SolLanosa">
                <span>
                  <i class="fab fa-github"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
