import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div id="contact-section" className={styles.contact}>
      <h2>CONTACT ME</h2>
      <div className={styles.contactBox}>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mar%C3%ADa-sol-lanosa-a59a03218/"
          >
            <img src="/img/linkedin.png" alt="" />
            <button>LINKEDIN</button>
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/SolLanosa">
            <img src="/img/github.png" alt="" />
            <button>GITHUB</button>
          </a>
        </div>
        <div>
          <a target="_blank" href="mailto:mslanosa@hotmail.com">
            <img src="/img/hotmail.png" alt="" />
            <button>MAIL</button>
          </a>
        </div>
        <div>
          <a target="_blank" href="">
            <img src="/img/cv.png" alt="" />
            <button>CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}
