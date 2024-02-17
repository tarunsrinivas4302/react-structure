import "./App.css";
import Hero from "./components/hero/Hero";
import Explore from "./components/explore/Explore";
import WhyChoose from "./components/whychoose/WhyChoose";
import Subscription from "./components/subscription/Subscription";
import Testimonials from "./components/testimonials/Testimonials";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="wrapper">
      <div className="container">
        <Hero />
        <Explore />
        <WhyChoose />
        <Subscription />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
