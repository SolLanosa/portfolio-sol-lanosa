import React from "react";
import styles from "./Proyect.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function Proyects(props) {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.slideBox}>
        <span>{props.projectname}</span>
        <img src={props.photo} alt="" />
      </div>
      <div className={styles.description}>
        <p>{props.info}</p>
      </div>
      <div className={styles.buttonBox}>
        <a href={props.link}>
          <button>Visitar el proyecto</button>
        </a>
        <a href={props.linkcode}>
          <button>Visitar el codigo</button>
        </a>
      </div>
    </div>
  );
}
