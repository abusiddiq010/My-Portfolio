import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";

// import Route from "./Routes/route";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
