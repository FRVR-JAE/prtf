import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-b  from-gray-800 to-black w-full h-screen">
      <NavBar />
      <Home />
      <About />
      <Portfolio />

      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;