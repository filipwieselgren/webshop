import logo from "../images/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-wrapper">
      <div className="content-footer-wrapper">
        <div
          className="content-footer logo-footer-wrapper"
          onClick={() => navigate("/")}
        >
          <img className="footer-logo" src={logo} alt="Image of logo" />
        </div>
        <div className="content-footer some-wrapper">
          <div className="some-circle">
            <a href="#">
              <FaFacebookF className="footer-icon" />
            </a>
          </div>
          <div className="some-circle">
            <a href="#">
              <AiFillInstagram className="footer-icon" />
            </a>
          </div>
          <div className="some-circle">
            <a href="#">
              <FaTwitter className="footer-icon" />
            </a>
          </div>
        </div>
        <div className="content-footer">
          <ul className="footer-ul">
            <a href="#">
              <li>About us</li>
            </a>
            <a href="#">
              <li>Contact us</li>
            </a>
            <a href="#">
              <li>Faq</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="rights-wrapper">
        <div className="rights">&copy; Copyright All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
