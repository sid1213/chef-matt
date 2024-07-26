import Slider from "react-slick";
import PromotionalBanner from "./PromotionalBanner";
import styles from "./styles.module.scss";

const PromotionalCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <PromotionalBanner key={index} />
          ))}
      </Slider>
    </div>
  );
};

export default PromotionalCarousel;
