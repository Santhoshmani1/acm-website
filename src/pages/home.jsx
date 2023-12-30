import Header from "../components/header";
import Footer from "../components/footer";
import events from "../assets/events.png";
import { useEffect, useRef } from "react";
import { FaGlobe } from "react-icons/fa6";
import { Link } from "react-router-dom";
import heroVideo from "../assets/home.mp4";
import logo from "../assets/logo.png";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);
  return (
    <>
      <Header />

      <div className="home pt-10">
        <div className="home-hero h-screen md:flex md:justify-center md:items-center pt-5 leading-loose">
          <div className="md:w-3/5">
            <h2
              className="lg:text-6xl text-4xl pt-5 font-bold text-center leading-none"
              style={{ fontFamily: "Poppins,Ariel" }}
            >
              <div className="pt-3">
                Welcome to
                <span className="text-blue-600"> ACM ANITS </span>
                Student Community
              </div>
            </h2>

            <p
              className="text-lg leading-relaxed lg:w-4/5 lg:text-2xl text-center mx-auto p-2 md:w-1/2 my-2"
              style={{ fontFamily: "Poppins,serif" }}
            >
              ACM ANITS Student Chapter is a student community that aims to
              encourage students to take up research and development in the
              field of Computer Science.
            </p>
          </div>
          <div className="home-hero-image">
            <video
              ref={videoRef}
              id="hero-video"
              src={heroVideo}
              autoPlay={"true"}
              loop
              muted
              playsInline
              type="video/mp4"
              className="w-3/4 mx-auto"
              style={{ maxHeight: "60vh" }}
            />
          </div>
        </div>
      </div>

      <div className="home-about mx-auto text-center p-4">
        <h2 className="text-5xl text-center text-black pt-10 ">About</h2>
        <div className="about-container flex justify-start items-center flex-col md:flex-row my-5 mx-auto">
          <div className="about-image mx-auto lg:w-1/2">
            <img src={logo} alt="" className="mx-auto h-auto" />
          </div>
          <div
            className="leading-relaxed lg:text-lg text-start md:px-10 py-6 px-3 w-1/2"
            style={{ fontFamily: "Poppins", backgroundColor: "#f6f9ff" }}
          >
            ANITS ACM Student Chapter was formed by the Department of Computer
            Science & Engineering on <b>07.07.2017</b> to provide a platform for
            UG & PG Students to improve &amp; showcase their Competitive skills
            at National &amp; International Level. ACM is widely recognized as
            the premier membership organization for computing professionals,
            delivering resources that advance computing as a science &amp; a
            profession. ACM hosts the computing industry&apos;s leading Digital
            Library, and serves its global members and the computing profession
            with journals and magazines, conferences, workshops, electronic
            forums, and Learning Center.
          </div>
        </div>
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
            <div
              className="text-center text-lg p-2 leading-relaxed"
              style={{ fontFamily: "Montserrat" }}
            ></div>
          </div>
        </div>
        <div className="events-action flex justify-center items-center p-3">
          <Link to="/events">
            <button className="px-8 py-3 bg-blue-800 hover:bg-blue-600 text-white rounded-xl shadow-sm shadow-slate-400 text-center text-sm">
              Browse Upcoming events{" "}
              <FaGlobe style={{ display: "inline-block" }} />
            </button>
          </Link>
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
            <Link to="/team">
              <button className="px-8 py-3 bg-blue-800 hover:bg-blue-600 text-white rounded-xl shadow-sm shadow-slate-400 text-sm">
                Meet the team
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
