import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FooterEnd() {
  const navigate = useNavigate();
  // Logic Number of User Visited
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    const existingVisitorId = getVisitorIdFromCookie();
    if (existingVisitorId) {
      setVisitorCount(existingVisitorId.split(",").length);
    } else {
      const newVisitorId = generateVisitorId();
      setVisitorCount(1);
      setVisitorIdCookie(newVisitorId);
    }
  }, []);
  const getVisitorIdFromCookie = () => {
    const cookie = document.cookie.match(/visitorId=([^;]*)/);
    return cookie ? cookie[1] : null;
  };
  const generateVisitorId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const setVisitorIdCookie = (visitorId) => {
    document.cookie = `visitorId=${visitorId}; max-age=2592000;`;
  };
  return (
    <footer>
      <div className="footer-end max-width">
        <span style={{ color: "#6d6d55", textAlign: "center" }}>
          U.P. Reg. NO. 97AL39100
        </span>
        <div className="social-media-box ">
          <a
            href="https://www.instagram.com/allahabad_jankalyan_samiti_ngo/"
            target="blank"
          >
            <FaInstagram
              className="header-icons"
              style={{ marginLeft: "0.5rem" }}
            />
          </a>
          <a
            href="https://www.facebook.com/allahabad.jankalyansamiti/photos"
            target="blank"
          >
            <RiFacebookCircleLine className="header-icons" />
          </a>
          {/* <a
            href="https://youtube.com/@VishalBodhi?si=j32hs9mW3DYt85nR"
            target="blank"
          >
            <FiYoutube className="youtube" />
          </a>
          <a
            href="https://x.com/VishalBodhi?t=pYO7cH0Tf3-x3_Z_JrhLdA&s=09"
            target="blank"
          >
            <BsTwitterX className="header-icons" />
          </a>
          <FaUser
            className="admin-user"
            onClick={() => navigate("admin/login")}
          /> */}
        </div>
        <p style={{ color: "#6d6d55" }}>
          © 2016 Jankalyan Samiti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
