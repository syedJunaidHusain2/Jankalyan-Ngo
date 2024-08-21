import "./styles.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import EmailLink from "../../../utils/EmailHook";
import PhoneLink from "../../../utils/PhoneLink";

export default function Topbar() {
  return (
    <header style={{ background: "#b2def7" }}>
      <div className="headerTop max-width" id="/">
        <div className="din-in">
          <EmailLink /> |
          <a href="https://www.instagram.com/allahabad_jankalyan_samiti_ngo/" target="blank">
            <FaInstagram
              className="header-icons"
              style={{ marginLeft: "0.5rem" }}
            />
          </a>
          <a href="https://www.facebook.com/allahabad.jankalyansamiti/photos" target="blank">
            <RiFacebookCircleLine className="header-icons" />
          </a>
          {/* <a href="https://youtube.com/@VishalBodhi?si=j32hs9mW3DYt85nR" target="blank">
            <FiYoutube className="header-icons" />
          </a>
          <a
            href="https://x.com/VishalBodhi?t=pYO7cH0Tf3-x3_Z_JrhLdA&s=09"
            target="blank"
          >
            <BsTwitterX className="header-icons" />
          </a> */}
        </div>
        <div>
          <BsFillTelephoneFill
            className="header-icons"
            style={{ fontSize: "18px" }}
          />
          <span style={{ letterSpacing: "2px" }}>
            <PhoneLink />
          </span>
        </div>
      </div>
    </header>
  );
}
