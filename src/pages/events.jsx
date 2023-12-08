import Footer from "../components/footer";
import Header from "../components/header";
import vcs from "../../src/assets/version-control-logo.png";
const upcomingEvents = [
  {
    title: "Introduction to Version Control with Git & Github",
    date: "December 20, 2023",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    description:
      "Learn the essentials of version control using Git and GitHub. Join us for a hands-on experience with Git and GitHub! Learn how to use GitHub to collaborate with others on projects.",
    venue: "Online, in-person",
    registrationLink: "https://forms.gle/1Ln1y9JpbT9BpZt47",
    poster: vcs,
  },
];

const Events = () => {
  return (
    <>
      <Header />
      <div className="events-page">
        <h2 className="text-4xl p-2 m-2 font-semibold font-sans text-center">
          Upcoming Events
        </h2>
        <div className="events-container mx-4">
          {upcomingEvents.map((event, index) => (
            <div
              className="event-card max-w-screen-md mx-auto shadow-lg shadow-slate-500 p-4 m-4 rounded-xl"
              key={index}
            >
              <div className="event-banner">
                <img
                  src={event.poster}
                  alt=""
                  className="object-cover w-full"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="event-card-header">
                <h3 className="text-2xl font-bold text-center p-2">
                  {event.title}
                </h3>
                <div
                  className="flex justify-evenly items-center md:flex-row p-2 text-lg"
                  style={{
                    fontFamily: "Roboto,sans-serif",
                    letterSpacing: "0.3px",
                  }}
                >
                  <div className="font-semiboldpx-4 py-2 rounded-xl text-center font-semibold text-gray-800">
                    {event.date}
                  </div>
                  <div className="font-semibold text-center p-2 text-gray-700">
                    {event.startTime} - {event.endTime}
                  </div>
                </div>
              </div>
              <div className="event-card-body">
                <p className="text-slate-600 text-center" style={{fontFamily:"Roboto,Ariel,sans"}}>{event.description}</p>
              </div>
              <div className="font-semibold p-2">
                Venue: {event.venue}
              </div>
              <div className="event-card-footer mx-auto text-center">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary text-center px-10 py-3 m-2 rounded-xl bg-blue-600 hover:bg-blue-800 text-white">
                    Register now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
