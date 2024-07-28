import { useState } from "react";
import { Container } from "./components/Container";
import { HeroBanner } from "./components/HeroBanner";
import AboutProduct from "./components/AboutProduct";
import PromotionalCarousel from "./components/PromotionalCarousel";
import NewsLatter from "./components/NewsLatter";
import Footer from "./components/Footer";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import logo from "../src/assets/logo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Delivery } from "./components/Delivery";
import { Info } from "./components/Info";
import useWindowDimensions from "./hooks/useWindowDimensions";
import styles from "./App.module.scss";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Sidebar
        collapsed={collapsed}
        className={styles.sideBar}
        backgroundColor="#130F0CCC"
        collapsedWidth={width >= 768 ? "130px" : "70px"}
      >
        <div className={styles.menuContainer}>
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className={collapsed ? styles.bars : styles.collapsed}
          >
            {!collapsed ? <RxCross1 size={24} /> : <FaBars size={24} />}
          </button>

          {collapsed ? (
            <div className={styles.logoContainer}>
              <img src={logo} alt="logo" className={styles.logo} />
            </div>
          ) : (
            <div className={styles.menu}>
              <div>
                <img src={logo} alt="logo" className={styles.logo} />
                <Menu className={styles.menuListBox}>
                  <MenuItem> HOME </MenuItem>
                  <MenuItem> PRODUCTS </MenuItem>
                  <MenuItem> MEET CHEF MATT </MenuItem>
                  <MenuItem> FAQ </MenuItem>
                  <MenuItem> CONNECT WITH US</MenuItem>
                </Menu>
              </div>

              <div className={styles.menuFooter}>
                <p>
                  TEXT SUPPORT 24/7 <span> 070-7782-9137</span>
                </p>
                <div className={styles.buttons}>
                  <button>
                    <BsHandbag size={"20"} /> CART
                  </button>
                  <button>
                    <FaRegHeart size={"20"} /> WISHLIST
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Sidebar>
      <div className={styles.main}>
        <HeroBanner />
        <AboutProduct />
        <PromotionalCarousel />
        <Info />
        <NewsLatter />
        <Delivery />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
