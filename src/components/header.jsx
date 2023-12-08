import logo from "../assets/logo.png";
const Header = () => {
  function toggleNavbar() {
    const navbar = document.getElementById("navbar-solid-bg");
    navbar.classList.toggle("hidden");
  }
  return (
    <>
      <nav
        className="py-2 shadow border"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
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
          </a>
          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-solid-bg"
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 sm:hidden justify-center text-sm hover:border  hover:border-gray-400 rounded-lg hover:bg-gray-200 md:hidden"
            aria-controls="navbar-solid-bg"
            aria-expanded="false" 
          >
            <span className="material-icons">menu</span>
          </button>
          <div className=" w-full md:block md:w-auto hidden" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li className="text-center">
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600  text-xl "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="text-center">
                <a
                  href="/events"
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600  text-xl "
                >
                  Events
                </a>
              </li>
              <li className="text-center">
                <a
                  href="/projects"
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600  text-xl "
                >
                  Projects
                </a>
              </li>
              <li className="text-center">
                <a
                  href="/team"
                  className="block py-2 px-3 text-gray-600 hover:text-blue-600  text-xl "
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
