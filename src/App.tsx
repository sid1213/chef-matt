import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import { Container } from "./components/Container";
import { HeroBanner } from "./components/HeroBanner";
import AboutProduct from "./components/AboutProduct";
import PromotionalCarousel from "./components/PromotionalCarousel";
import NewsLatter from "./components/NewsLatter";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <HeroBanner />
      <AboutProduct />
      <PromotionalCarousel />
      <NewsLatter />
      <Footer />
    </Container>
  );
}

export default App;
