import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/portfolio-react" element={<Navigate to="/about" />} />
        <Route path="/about" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
