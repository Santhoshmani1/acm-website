import Footer from "../components/footer";
import Header from "../components/header";
import upcomingEvents from "../data/upcomingEvents";
import pastEvents from "../data/pastEvents.js";
import PastEvent from "../components/PastEvent";
import Animate from "../components/AnimateComponent";
import UpcomingEvent from "../components/UpcomingEvent.jsx";

const Events = () => {
  return (
    <section id="events">
      <Header />
      <div className="events-page pt-20">
        <h2 className="text-2xl lg:text-3xl p-2 m-2 font-bold font-sans text-center">
          Upcoming Events
        </h2>

        <div>
          {
            upcomingEvents.length == 0 ?
              <div className="text-center text-xl p-4">
                Stay tuned for upcoming events! ✨
              </div>
              : upcomingEvents.map((Event, index) => {
                return (
                  <>
                    <Animate>
                      <UpcomingEvent key={index} Event={Event} />
                    </Animate>
                  </>
                );
              })
          }
        </div>


        <h2 className="text-2xl lg:text-3xl p-2 m-2 font-bold font-sans text-center">
          Previous Events
        </h2>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10 lg:justify-items-center">
          {pastEvents.map((Event, index) => {
            return (
              <>
                <Animate>
                  <PastEvent key={index} Event={Event} />
                </Animate>
              </>
            );
          })}
        </div>

      </div>


      <Footer />
    </section>
  );
};

export default Events;
