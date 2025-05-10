import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./sections/NavBar";
import Landing from "./sections/Landing";
import Solution from "./sections/Solution";
import Process from "./sections/Process";
import Impact from "./sections/Impact";
import Technology from "./sections/Technology";
import CTA from "./sections/CTA";
import "./index.css"
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/process" element={<Process />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="/cta" element={<CTA />} />
      </Routes>
    </Router>
  );
}

export default App;
