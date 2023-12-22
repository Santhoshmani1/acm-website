import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaX, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import acmlogo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container flex justify-between items-center z-10 bg-slate-900 p-2">
          <div className="wrapper flex items-center justify-center">
            <div className="bg-white rounded-2xl p-2 mt-5">
              <img src={acmlogo} alt="acm-logo" style={{ height: "50px" }} />
            </div>
            <h2 className="text-2xl p-2 font-sans font-normal mt-5">
              <Link to="/" className="text-white ">
                <div className="text-center">ANITS</div>
                <div className="text-center">ACM</div>
              </Link>
            </h2>
          </div>
          <div className="path-links-container py-4 hidden lg:block">
            <ul
              className="md:flex md:justify-evenly md:items-center
             "
            >
              <li className="p-2 text-blue-500 text-lg">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="p-2 text-blue-500 text-lg">
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li className="p-2 text-blue-500 text-lg">
                <Link to="/Projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li className="p-2 text-blue-500 text-lg">
                <Link to="/Team" className="hover:underline">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="socials-container flex  md:justify-evenly justify-center items-center">
            <Link to="https://www.github.com/Santhoshmani1/acm-website">
              <FaGithub
                className="text-3xl p-1 rounded-2xl mx-4 text-center"
                style={{ backgroundColor: "black", color: "white" }}
              />
            </Link>{" "}
            <Link to={""}>
              <FaXTwitter
                className="text-3xl p-1 rounded-2xl mx-4 text-center"
                style={{ backgroundColor: "#111", color: "white" }}
              />
              </Link>
            <Link to={""}>
              <FaLinkedinIn
                className="text-3xl p-1 rounded-2xl mx-4 text-center"
                style={{ backgroundColor: "#0A66C2", color: "white" }}
              />
            </Link>
            <Link to={""}>
              <FaInstagram
                className="text-3xl p-1 rounded-2xl mx-4 text-center"
                style={{ backgroundColor: "#E1306C", color: "white" }}
              />
            </Link>
          </div>
        </div>
        <div className="copyright-container text-center py-3 font-sans bg-slate-900 text-gray-300">
          &copy; All rights reserved ACM ANITS 2023
        </div>
      </footer>
    </>
  );
};

export default Footer;
