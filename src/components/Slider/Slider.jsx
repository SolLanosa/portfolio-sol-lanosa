import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "../../hooks/useWindowSize.hooks";
import Proyect from "../Proyect/Proyect";
import styles from "./Slider.module.scss";

export default (props) => {
  const { width } = useWindowSize();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={width > 1366 ? 2 : 1}
      modules={[Pagination]}
      className={styles.swiper}
      pagination={{ clickable: true }}
    >
      {" "}
      {props.proyectsData.map((proyect) => {
        return (
          <SwiperSlide>
            <Proyect {...proyect} />{" "}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
