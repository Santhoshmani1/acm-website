import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";
import acmlogo from "../assets/logo.png";
const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="footer-container sm:grid sm:grid-cols-3 sm:items-center  z-10 bg-slate-900 pl-5 flex flex-col items-start">
          <div className="wrapper flex items-center justify-center">
            <div className="bg-white rounded-2xl p-2 mt-5">
              <img src={acmlogo} alt="acm-logo" style={{ height: "30px" }} />
            </div>
            <h2 className="md:text-2xl px-4 text-xl font-sans font-semibold mt-5">
              <Link to="/" className="text-white ">
                <div className="text-center">ACM ANITS</div>
              </Link>
            </h2>
          </div>
          <div className="path-links-container py-4  sm:mx-auto sm:block">
            <ul
              className="md:flex md:justify-evenly md:items-center
             "
            >
              <li className="p-2 text-blue-500 text-lg">
                <Link to="/#home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="p-2 text-blue-500 text-lg">
                <Link to="/events/#" className="hover:underline">
                  Events
                </Link>
              </li>
              <li className="p-2 text-blue-500 text-lg">
                <Link to="/projects/#" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li className="p-2 text-blue-500 text-lg">
                <Link to="/team/#" className="hover:underline">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="socials-container flex justify-center items-center py-4">
            <Link to="https://www.github.com/Santhoshmani1/acm-website">
              <FaGithub
                className="text-3xl p-1 rounded-2xl mx-4 text-center"
                style={{ backgroundColor: "black", color: "white" }}
              />
            </Link>{" "}
            <Link
              to={"https://www.linkedin.com/company/acmanits"}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                className="text-3xl p-1 rounded-2xl mx-4 text-center"
                style={{ backgroundColor: "#069", color: "white" }}
              />
            </Link>
            <Link to={"https:/instagram.com/acm_anits/"}>
              <FaInstagram
                className="text-3xl p-1 rounded-2xl mx-4 text-center"
                style={{ backgroundColor: "#E1306C", color: "white" }}
              />
            </Link>
          </div>
        </div>
        <div className="copyright-container sm:text-center p-3 font-sans bg-slate-900 text-gray-300">
          <div className="font-bold p-1">ACM ANITS {Year}</div>
          &copy; All rights reserved
          <div></div>{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
