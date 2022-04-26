import React from "react";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div id="aboutme-section" className={styles.aboutme}>
      <div className={styles.titleAboutMe}>
        <h2>ABOUT ME</h2>
      </div>
      <div className={styles.aboutBox}>
        <img src="/img/profilepic.jpg" alt="" />
        <p>
          En búsqueda de mis primeras experiencias laborales. Soy una persona
          autoexigente y responsable a la que le gustan los desafíos. Mi
          objetivo es recibirme en el 2022 como abogada y continuar estudios
          terciarios en sistemas, a la par de trabajar en experiencias
          motivantes del mundo digital.
        </p>
      </div>
    </div>
  );
}
