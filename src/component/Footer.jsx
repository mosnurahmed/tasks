
import { image } from "../assets/img/img";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContact">
        <img src={image.logo} alt="" />
        <ul>
          <li>
            <i className="fa-solid fa-location-dot"></i>veniam, quis nostrud exercitation ullamco laboris
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            +92 51 8893644
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>veniam, quis nostrud exercitation ullamco laboris
          </li>
        </ul>
      </div>
      <div className="info">
        <h3>More Information</h3>
        <p>Contact Us</p>
        <p>About us Us</p>
      </div>
      <div className="social">
        <h2>Join Us On</h2>
        <div className="socialIcon">
          <ul>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
