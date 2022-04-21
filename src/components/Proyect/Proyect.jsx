import React from "react";
import styles from "./Proyect.module.scss";

export default function Proyects(props) {
  const style = [styles.proyects];
  if (props.inverted) {
    style.push(styles.rowReverse);
  }
  return (
    <div className={style.join(" ")}>
      <div className={styles.portfolioImg}>
        <span>{props.projectname}</span>
        <img src={props.photo} alt="" />
      </div>
      <div className={styles.portfolioInfo}>
        <p>{props.info}</p>

        <a href={props.link} target="_blank">
          <button>VISITAR EL PROYECTO</button>
        </a>

        <a href={props.linkcode} target="_blank">
          <button> VISITAR CODIGO </button>
        </a>
      </div>
    </div>
  );
}
