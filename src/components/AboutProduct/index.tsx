import Card from "../Common/Card";
import leaf from "../../assets/leaf.png";
import leftArrow from "../../assets/Expand_left_double_light.svg";
import rightArrow from "../../assets/Expand_right_double_light.svg";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import { AboutData } from "../../data/AboutData";

function SampleNextArrow(props: {
  className?: string;
  style?: object;
  onClick?: () => void;
}) {
  const { onClick } = props;
  return (
    <img src={rightArrow} className={styles.arrowNext} onClick={onClick} />
  );
}

function SamplePrevArrow(props: {
  className?: string;
  style?: object;
  onClick?: () => void;
}) {
  const { onClick } = props;
  return (
    <img src={leftArrow} className={styles.arrowsPrev} onClick={onClick} />
  );
}

const AboutProduct = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.about}>
      <h1 className={styles.heading}>CHEF MATT PRODUCTS</h1>
      <p className={styles.para}>
        Shop Gourmet Chef Quality products from the Chef Matt brand. <br />
        Chef it yourself and Thank us later.{" "}
      </p>
      <img src={leaf} alt="leaf" className={styles.leaf} />
      <br />
      <br />
      <Slider {...settings}>
        {AboutData.map((d, index) => (
          <Card
            key={index}
            actualRate={d?.oldPrice}
            discountedRate={d?.newPrice}
            title={d.name}
            img={d.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default AboutProduct;
