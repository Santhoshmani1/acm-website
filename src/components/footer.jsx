import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container flex justify-evenly items-center z-10 bg-slate-900 p-2">
          <h2 className="text-2xl p-2 font-sans font-normal ">
            <Link to="/" className="text-white">
              ACM ANITS
            </Link>
          </h2>
          <div className="path-links-container py-4 hidden lg:block">
            <ul 
              className="md:flex md:flex-col md:justify-evenly md:items-center
             "
            >
              <li className="py-2 text-blue-500 text-lg">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="py-2 text-blue-500 text-lg">
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li className="py-2 text-blue-500 text-lg">
                <Link to="/Projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li className="py-2 text-blue-500 text-lg">
                <Link to="/Team" className="hover:underline">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="socials-container flex  md:justify-evenly justify-center items-center">
            <Link to="https://www.github.com/Santhoshmani1/acm-website">
              <FaGithub
                className="text-3xl p-1 rounded-3xl mx-6 text-center"
                style={{ backgroundColor: "black",color:"white" }}
              />
            </Link>{" "}
            {/* <a href="/">
              <FaLinkedinIn
                className="text-3xl p-1 rounded-lg mx-6"
                style={{ backgroundColor: "#069",color:"white" }}
              />
            </a>
            <a href="/">
              <FaTwitter
                className="text-3xl p-1 rounded-lg mx-6"
                style={{ backgroundColor: "#069aed",color:"white" }}
              />
            </a> */}
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
