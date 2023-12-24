import Footer from "../components/footer";
import Header from "../components/header";
import comingSoon from "../assets/comingSoon.jpg";
const Projects = () => {
  return (
    <>
      <Header />
      <div className="projects-container pt-20">
        <h2 className="text-4xl text-center p-3 font-semibold">Projects</h2>
      </div>
      <div className="upcoming-projects-container mb-40 mb:mb-0 lg:max-h-1/2">
        <img src={comingSoon} alt="" id="coming-soon" />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
