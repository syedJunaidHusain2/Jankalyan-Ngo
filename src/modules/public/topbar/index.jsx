import "./styles.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import EmailLink from "../../../utils/EmailHook";
import PhoneLink from "../../../utils/PhoneLink";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <header className="topbar-container">
      <div className="headerTop max-width">
        {/* Left - Admin, Email, Social Icons */}
        <div className="left-section">
          <MdAdminPanelSettings
            className="header-icons"
            onClick={() => navigate("/admin")}
          />
          <EmailLink />
          <div className="social-icons">
            <a
              href="https://www.instagram.com/allahabad_jankalyan_samiti_ngo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="header-icons" />
            </a>
            <a
              href="https://www.facebook.com/allahabad.jankalyansamiti/photos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookCircleLine className="header-icons" />
            </a>
          </div>
        </div>

        {/* Right - Phone */}
        <div className="right-section">
          <BsFillTelephoneFill className="header-icons" />
          <span className="phone-text">
            <PhoneLink />
          </span>
        </div>
      </div>
    </header>
  );
}
