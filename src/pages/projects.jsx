import Footer from "../components/footer";
import Header from "../components/header";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="projects-container">
        <h2 className="text-4xl text-center p-3 font-semibold">Projects</h2>
        <div className="upcoming-projects-container" style={{height:"60vh"}}>
          <h3 className=" text-center px-5 text-2xl text-blue-600">Coming soon ..</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
