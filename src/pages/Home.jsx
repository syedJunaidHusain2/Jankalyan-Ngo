import { useContext } from "react";
import About from "../modules/public/about";
import ContactUs from "../modules/public/contact";
import Events from "../modules/public/events";
import Footer from "../modules/public/footer";
import FooterEnd from "../modules/public/footer/FooterEnd";
import Hero from "../modules/public/hero";
import Navbar from "../modules/public/navbar";
import News from "../modules/public/news";
import Topbar from "../modules/public/topbar";
import whatsappLink from "../utils/WatsappLink";
import watsappLogo from "../assets/images/watsap.png";
export default function Home() {
  return (
    <section>
      <Topbar />
      <Navbar />
      <Hero  />
      <About  />
      <Events />
      <News />
      <ContactUs />
      <Footer  />
      <FooterEnd />

      <img
        src={watsappLogo}
        alt="watsapp-logo"
        className="watsapp"
        onClick={whatsappLink}
      />
    </section>
  );
}
