import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useRef } from "react";
import { FaGlobe } from "react-icons/fa6";
import { Link } from "react-router-dom";
import heroVideo from "../assets/home.mp4";
import logo from "../assets/logo.png";
import Animate from "../components/AnimateComponent";

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

      <section id="home" className="pt-10">
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
              autoPlay={true}
              loop
              muted
              playsInline
              type="video/mp4"
              className="w-3/4 mx-auto"
              style={{ maxHeight: "60vh" }}
            />
          </div>
        </div>
      </section>

      <div className="home-about mx-auto text-center p-4 min-h-full">
        <h2 className="text-5xl text-center text-black pt-10 font-bold" style={{ fontFamily: "Poppins,Ariel" }}>About ACM ANITS</h2>
        <Animate>
          <div className="about-container flex justify-start items-center flex-col md:flex-row my-5 mx-auto md:mx-20">
            <div className="about-image mx-auto md:w-1/2">
              <div><img src={logo} alt="" className="mx-auto sm:h-auto h-60" /></div>
            </div>
            <div
              className="leading-relaxed font-light lg:text-2xl text-start md:px-10 py-6 px-3 md:text-2xl w-4/5 text-lg text-gray-900 bg-slate-50"
              style={{ fontFamily: "Poppins" }}
            >
              <div className="p-2">
                ANITS ACM Student Chapter was formed by the Department of Computer
                Science & Engineering on <b>07.07.2017</b> to provide a platform for
                UG & PG Students to improve &amp; showcase their Competitive skills
                at National &amp; International Level.
              </div>
              {"\n"}
              <div className="p-2">
                ACM is widely recognized as
                the premier membership organization for computing professionals,
                delivering resources that advance computing as a science &amp; a
                profession.
              </div>
            </div>
          </div>
        </Animate>
      </div>

      <section id="upcoming-acm-anits-events" className="p-20">
        <h2 className="text-5xl pt-10 leading-relaxed text-center font-bold" style={{ fontFamily: "Poppins,Ariel" }}>
          Partcipate in Upcoming Events
        </h2>
        <div className="text-center text-2xl p-2">
          ANITS ACM Conducts various technical events to encourage innovation and creativity in students
        </div>
        <div className="events-info mx-auto md:flex md:justify-center md:items-center">
          <div className="events-image-container mx-auto flex justify-center items-center py-10 w-full flex-col md:flex-row">
            <Animate>
              <div className="flex justify-center items-center flex-col mx-4">
                <span className="material-icons" style={{ fontSize: "150px", color: "#00cc00" }}>calendar_month</span>
                <div className="text-lg">Technical workshops</div>
              </div>
            </Animate>
            <Animate>
              <div className="flex justify-center items-center flex-col mx-4">
                <span className="material-icons" style={{ fontSize: "150px", color: "gold" }}>emoji_events</span>
                <div className="text-lg">
                  Hackathons &amp; Programming contests
                </div>
              </div>
            </Animate>
            <Animate>
              <div className="flex justify-center items-center flex-col mx-4">
                <span className="material-icons" style={{ fontSize: "150px", color: "red" }}>groups</span>
                <div className="text-lg">
                  Seminars
                </div>
              </div>
            </Animate>
          </div>
        </div>
        <Animate>
          <div className="events-action flex justify-center items-center">
            <Link to="/events">
              <button className="px-8 py-3 bg-blue-800 hover:bg-blue-600 text-white rounded-xl shadow-sm shadow-slate-400 text-center text-lg" style={{ fontFamily: "Poppins,Ariel" }}>
                Browse Upcoming events{" "}
                <FaGlobe style={{ display: "inline-block" }} />
              </button>
            </Link>
          </div>
        </Animate>
      </section>

      <section id="acm-anits-team">
        <h2 className="text-5xl md:text-4xl text-center font-semibold p-3">
          ACM ANITS Team
        </h2>

        <Animate>
          <div className="team-info  text-xl md:text-2xl md:w-4/5 mx-auto text-center p-2 leading-relaxed" style={{ fontFamily: "Poppins,Ariel" }}>
            We are a diverse and inclusive community that warmly welcomes all
            student developers passionate about Computer Science.
          </div>
          <div className="events-action flex justify-center items-center p-3">
            <Link to="/team">
              <button className="px-8 py-3 bg-blue-800 hover:bg-blue-600 text-white rounded-xl shadow-sm shadow-slate-400 text-lg">
                Meet the team
              </button>
            </Link>
          </div>
        </Animate>
      </section>
      <Footer />
    </>
  );
};

export default Home;
