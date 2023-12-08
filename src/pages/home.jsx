import { FaGlobe } from "react-icons/fa6";
import Footer from "../components/footer";
import Header from "../components/header";
import events from "../assets/events.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-hero max-w-4xl mx-auto text-center p-4 ">
        <h2
          className="text-3xl text-center md:text-5xl font-semibold"
          style={{ fontFamily: "Open Sans,Montserrat,serif" }}
        >
          Welcome to
          <span className="text-blue-600"> ACM ANITS </span>
          Student Community
        </h2>
      </div>

      <div className="home-about max-w-4xl mx-auto text-center p-4 ">
        <h2
          className="text-5xl text-center"
          style={{ fontFamily: "Open Sans,Montserrat,serif" }}
        ></h2>
        <p className="text-lg">
          ACM ANITS Student Chapter is a student community that aims to
          encourage students to take up research and development in the field of
          Computer Science.
        </p>
      </div>

      <section id="upcoming-acm-anits-events border-2">
        <h2 className="text-3xl md:text-4xl text-center font-semibold p-3">
          Partcipate in Upcoming Events
        </h2>
        <div className="events-info mx-auto md:flex md:justify-center md:items-center">
          <div className="events-image-container mx-auto">
            <img
              src={events}
              alt="events-calendar-icon"
              className="w-1/2"
              style={{ margin: "auto" }}
            />
          </div>
          <div className="mx-auto text-center leading-loose p-2 max-w-screen-sm">
            <div className="text-center text-lg p-2 leading-relaxed">
              ACM ANITS Student Chapter conducts workshops, hackathons, and
              guest lectures and helps students to Upskill and get mentored.
            </div>
          </div>
        </div>
        <div className="events-action flex justify-center items-center p-3">
          <a href="/events">
            <button className="px-8 py-3 bg-blue-800 hover:bg-blue-600 text-white rounded-xl shadow-sm shadow-slate-400 text-center text-lg">
              Browse Upcoming events{" "}
              <FaGlobe style={{ display: "inline-block" }} />
            </button>
          </a>
        </div>
      </section>

      {/* <section id="acm-anits-projects-showcase">
        <h2 className="text-3xl md:text-4xl text-center font-semibold p-3">
          Projects Showcase
        </h2>
        <div className="projects-info">
          <div className="projects-header text-center text-lg p-2 font-semibold">
            ACM student community{" "}
            <FaHeart style={{ display: "inline-block" }} /> Open Source
          </div>
          <div className="projects-action flex justify-center items-center p-3">
            <a href="/projects">
              <button className="px-8 py-3 bg-blue-800 hover:bg-blue-600 text-white rounded-xl shadow-sm shadow-slate-400 text-lg">
                View Projects
              </button>
            </a>
          </div>
        </div>
      </section> */}

      <section id="acm-anits-team">
        <h2 className="text-3xl md:text-4xl text-center font-semibold p-3">
          Team
        </h2>
        
        <div className="team-info text-xl text-center p-2 mx-auto">
          We are a diverse and inclusive community that warmly welcomes all
          student developers passionate about Computer Science.
          <p className="welcome-note text-center text-lg font-semibold p-2">
            Whether you&apos;re a beginner or an experienced, We welcome you.
          </p>
          <div className="events-action flex justify-center items-center p-3">
            <a href="/team">
              <button className="px-8 py-3 bg-blue-800 hover:bg-blue-600 text-white rounded-xl shadow-sm shadow-slate-400">
                Meet the team
              </button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
