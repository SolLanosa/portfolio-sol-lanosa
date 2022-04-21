import React from "react";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div id="aboutme-section" className={styles.aboutme}>
      <h2>ABOUT ME</h2>
      <div className={styles.aboutBox}>
        <img src="/img/profilepic.jpg" alt="" />
        <p>
          "El desafío de este proyecto está enfocado en el maquetado de una
          landing page de un canal de Podcast. Para la realización de éste tuve
          que reproducir un figma con unicamente la utlizacion de HTML y CSS.
          Esta pagina contiene funcionalidades de reproducción de contenidos,
          navegación, compatibilidad con múltiples exploradores y
          dispositivos.",
        </p>
      </div>
    </div>
  );
}
