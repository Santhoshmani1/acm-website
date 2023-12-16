import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  function toggleNavbar() {
    const navbar = document.getElementById("navbar-solid-bg");
    navbar.classList.toggle("hidden");
  }
  return (
    <div className="fixed w-screen z-10">
      <nav
        className="py-1 shadow bg-white border-2"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="ACM ANITS Logo"
              style={{ width: "40px" }}
            />
            <h1 className="self-center px-2 text-3xl font-semibold">
              ACM ANITS
            </h1>
          </Link>
          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-solid-bg"
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10  justify-center text-sm hover:border  hover:border-gray-400 rounded-lg hover:bg-gray-200 md:hidden"
            aria-controls="navbar-solid-bg"
            aria-expanded="false" 
          >
            <span className="material-icons">menu</span>
          </button>
          <div className=" w-full md:block md:w-auto hidden" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li className="text-center">
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600  text-xl "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="text-center">
                <Link
                  to={"/events"}
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600  text-xl "
                >
                  Events
                </Link>
              </li>
              <li className="text-center">
                <Link
                  to={"/projects"}
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600  text-xl "
                >
                  Projects
                </Link>
              </li>
              <li className="text-center">
                <Link
                  to={"/team"}
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600  text-xl "
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
