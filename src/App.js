import Layout from "./components/Layout/Layout.js";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack.js";
import Projects from "./pages/Projects/project.js";
import Education from "./pages/Education/Education.js";
import WorkExp from "./pages/workexp/WorkExp.js";
import Contact from "./pages/Contact/Contact.js";
import MobileNav from "./components/MobileNav/MobileNav.js";
import ScrollToTop from "react-scroll-to-top";



function App() {
  return (
    <>

      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <TechStack />
        <Projects />
        <Education />
        <WorkExp />
        <Contact />

      </div>

      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
