import React from "react";
import Proyect from "../Proyect/Proyect";
import styles from "./Portfolio.module.scss";

export default function Portfolio(props) {
  return (
    <div className={styles.portfolio} id="portfolio-section">
      <div className={styles.titleBox}>
        <h2>PORTFOLIO</h2>
      </div>
      {props.proyectsData.map((proyect, index) => {
        return <Proyect {...proyect} inverted={index % 2 === 1} />;
      })}
    </div>
  );
}
