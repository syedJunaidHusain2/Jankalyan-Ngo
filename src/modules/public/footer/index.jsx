import "./styles.scss";
import Logo from "../../../assets/images/logomain.jpg";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { navData } from "../../../utils/data";
export default function Footer({ handlePayment }) {
  return (
    <footer className="footerContainer">
      <div className="footerContainer max-width">
        <div className="headerMiddle">
          <div>
            <img src={Logo} alt="Logo" className="logo" />
            <div className="contact-box">
              <div style={{ width: "fit-content" }}>
                <h3>ContactUs</h3>
                <hr />
              </div>
              <div className="footer-icon">
                <MdEmail style={{ translate: "0 3.5px", marginRight: "2px" }} />
                <span> allahabadjankalyansamiti852@gmail.com</span>
              </div>
              <div className="footer-icon">
                <BsFillTelephoneFill
                  style={{ translate: "0 3.5px", marginRight: "2px" }}
                />
                <span> +91 889-632-1211</span>
              </div>
              <div className="footer-icon">
                <FaLocationDot
                  style={{ translate: "-0.2rem 3.8px", marginRight: "2px" }}
                />
                <span>
                  Diamond Colony Kareli ,
                  PRAYGRAJ (U.P)
                </span>
              </div>
            </div>
          </div>

          <div className="link-box">
            <div style={{ width: "fit-content" }}>
              <h3>Links</h3>
              <hr />
            </div>
            {navData.map((item, id) => (
              <span key={id}>
                <IoIosArrowForward style={{ translate: "0 0.2rem " }} />
                <Link to={item.link} style={{ textTransform: "capitalize" }}>
                  {item.nav}
                </Link>
              </span>
            ))}
            {/* <button style={{ marginTop: "1rem" }} onClick={handlePayment}>
              Donate Now
            </button> */}
          </div>
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=SJ/2/204%20Sugam%20Vihar%20Awas%20Yojana%20Kalindipuram%20,%20PRAYGRAJ-212211%20(U.P)+(Google%20Maps)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="30%"
            height="240"
            style={{ border: "1" }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
