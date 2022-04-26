import React from "react";
import styles from "./InicialPage.module.scss";

export default function InicialPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.menuDesktop}>
          <div className={styles.title}>
            SOL <span>LANOSA</span>
          </div>
          <nav className={styles.navbar}>
            <ul className={styles.menu}>
              <li>
                <a href="#aboutme-section">ABOUT ME</a>
              </li>
              <li>
                <a href="#about-us-section">PORTFOLIO</a>
              </li>
              <li>
                <a href="#interview-section">SKILLS</a>
              </li>
              <li>
                <a href="#contact-section">CONTACT ME</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.menuMobile}>
          <div className={styles.title}>
            SOL <span>LANOSA</span>
          </div>
          <input className={styles.check} type="checkbox" id="menu" />
          <label for="menu">
            <div className={styles.inner}></div>
          </label>
          <div className={styles.nav}>
            <ul>
              <li>
                <a href="#aboutme-section">ABOUT ME</a>
              </li>
              <li>
                <a href="#about-us-section">PORTFOLIO</a>
              </li>
              <li>
                <a href="#interview-section">SKILLS</a>
              </li>
              <li>
                <a href="#contact-section">CONTACT ME</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section>
        <div className={styles.inicialPage}>
          <h1>
            Hello<span>,</span>
            <span> </span>
            world<span>.</span>
          </h1>
          <p>
            My name is Sol Lanosa. I'm a <span>Law student</span> and
            <span> Front-End web developer</span>. I started this programming
            journey 1 year ago. Visit my site where you can know more about my
            work.
            <p>Feel free to contact me. Any feedback is welcome.</p>
          </p>
          <a href="#aboutme-section">
            <button>CONOCER MÁS</button>
          </a>
        </div>
        <div className={styles.imagePrincipal}>
          <img src="/img/doodle.svg" alt="" />
        </div>
      </section>
    </div>
  );
}
