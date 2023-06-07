import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

function Footer () {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h2>Animates</h2>
          {/* <span>Anima</span> */}
          <p>
          Designs made by artists from around the world and not google.
          </p>
          <div className="socials">
            <Link to="https://github.com/Diablo-web">
              <p>
                <GitHubIcon />
              </p>
            </Link>
            <Link to="https://twitter.com/SumedhK01">
              <p>
                <TwitterIcon />
              </p>
            </Link>
            <Link to="https://www.linkedin.com/in/sumedh-kurhade-98274a19b/">
              <p>
                <LinkedInIcon />
              </p>
            </Link>
          </div>
        </div>
        <div className="footer-middle">
          <p className="title">Quick Links</p>
          <div className="listItems">
            <Link to="/products">
              <p>Products</p>
            </Link>
            <Link to="/wishlist">
              <p>Wishlist</p>
            </Link>
            <Link to="/cart">
              <p>Cart</p>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <p className="title">Contact Us</p>
          <div className="contact-list">
            <div className="contact-mode">
              <div className="contact-icon">
                <FmdGoodIcon />
              </div>
              <p>03, Jogeshwari-400087</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <CallIcon />
              </div>
              <p>+91 00888 56789</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <p>animates@yahoo.com</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span>No Copyright © 2023 {" "}</span>
          <span>Feel free to replicate</span>
        </div>
      </div>
    </>
  );
};
export {Footer};
