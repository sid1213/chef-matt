import styles from "./style.module.scss";
import Button from "../Common/Button";
import Slider from "react-slick";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export const HeroBanner = () => {
  const [collapsed, setCollapsed] = useState(true);
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
      <Sidebar
        collapsed={collapsed}
        className={styles.sideBar}
        backgroundColor="#130F0CCC"
        collapsedWidth="130px"
      >
        <div className={styles.menuContainer}>
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className={collapsed ? styles.bars : ""}
          >
            {!collapsed ? <ImCross size={20} /> : <FaBars size={20} />}
          </button>
          {collapsed ? (
            <div className={styles.logoContainer}>
              <img src={logo} alt="logo" className={styles.logo} />
            </div>
          ) : (
            <>
              <div>
                <Menu>
                  <MenuItem> Home </MenuItem>
                  <MenuItem> Product </MenuItem>
                  <MenuItem> MEET CHEF MATT </MenuItem>
                  <MenuItem> FAQ </MenuItem>
                  <MenuItem> CONNECT WITH US </MenuItem>
                </Menu>
              </div>
              <div>
                <p>
                  TEXT SUPPORT 24/7<span> 070-7782-9137</span>
                </p>
                <hr />
                <div>
                  <button>CART</button>
                  <button>WISHLIST</button>
                </div>
              </div>
            </>
          )}
        </div>
      </Sidebar>

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
