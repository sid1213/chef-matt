import styles from "./style.module.scss";
import Button from "../Common/Button";
import Slider from "react-slick";

export const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className={styles.banner}>
      <Slider {...settings} className={styles.carousel}>
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return (
              <div key={index} className={styles.carouselBox}>
                <Button className={styles.button}>Meet Chef Matt</Button>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
