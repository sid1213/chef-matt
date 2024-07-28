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
import styles from "./App.module.scss";
import { Delivery } from "./components/Delivery";
import { Info } from "./components/Info";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Container>
      <Sidebar
        collapsed={collapsed}
        className={styles.sideBar}
        backgroundColor="#130F0CCC"
        collapsedWidth="130px"
      >
        <div className={styles.menuContainer}>
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className={collapsed ? styles.bars : "flex justify-center w-full"}
          >
            {!collapsed ? <RxCross1 size={24} /> : <FaBars size={24} />}
          </button>

          {collapsed ? (
            <div className={styles.logoContainer}>
              <img src={logo} alt="logo" className={styles.logo} />
            </div>
          ) : (
            <div className="flex flex-col h-[90%] justify-between">
              <div>
                <img src={logo} alt="logo" className={styles.logo} />
                <Menu>
                  <MenuItem> HOME </MenuItem>
                  <MenuItem> PRODUCTS </MenuItem>
                  <MenuItem> MEET CHEF MATT </MenuItem>
                  <MenuItem> FAQ </MenuItem>
                  <MenuItem> CONNECT WITH US </MenuItem>
                </Menu>
              </div>

              <div className="flex flex-wrap">
                <p className="text-xs ml-0">
                  TEXT SUPPORT 24/7{" "}
                  <span className="text-primary my-2"> 070-7782-9137</span>
                </p>
                <div className=" border-t-2 w-full mt-4 flex justify-between pt-5">
                  <button className="flex gap-2">
                    <BsHandbag size={"20"} /> CART
                  </button>
                  <button className="flex gap-2">
                    <FaRegHeart size={"20"} /> WISHLIST
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Sidebar>
      <div className="w-full overflow-x-hidden">
        <HeroBanner />
        <AboutProduct />
        <PromotionalCarousel />
        {!collapsed && <Info />}
        <NewsLatter />
        <Delivery />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
