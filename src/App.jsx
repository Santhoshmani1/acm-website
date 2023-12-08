import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Events from "./pages/events";
import Projects from "./pages/projects";
import Team from "./pages/team";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
