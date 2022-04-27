import React from "react";
import Slider from "../Slider/Slider";
import styles from "./Portfolio.module.scss";

export default function Portfolio(props) {
  return (
    <div className={styles.portfolio} id="portfolio-section">
      <div className={styles.titleBox}>
        <h2>PORTFOLIO</h2>
      </div>
      <div className={styles.sliderContainer}>
        <Slider proyectsData={props.proyectsData} />
      </div>
    </div>
  );
}
