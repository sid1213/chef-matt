import Card from "../Common/Card";
import img from "../../assets/product.jpeg";
import leaf from "../../assets/leaf.png";
import leftArrow from "../../assets/Expand_left_double_light.svg";
import rightArrow from "../../assets/Expand_right_double_light.svg";
import styles from "./styles.module.scss";
import Slider from "react-slick";

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
        {Array(8)
          .fill(null)
          .map(() => (
            <Card
              actualRate={12.0}
              discountedRate={9}
              title="Coconut Oil"
              img={img}
            />
          ))}
      </Slider>
    </div>
  );
};

export default AboutProduct;
