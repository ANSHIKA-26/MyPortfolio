import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/resume.pdf'

const Home = () => {
  return (
    <div className="container-fluid home-container" id="home">
      <div className="container home-content">
        <h2>Hi 👋 I am a </h2>
        <h1>
          <Typewriter
            options={{
              strings: ["MERN stack developer ", "Frontend developer","UI UX designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="home-buttons">
          <button className="btn btn-hire">Hire me</button>
          <a className="btn btn-cv" href={Resume} download="anshika.pdf">My Resume</a>

          </div>
      </div>
    </div>
  );
};

export default Home;
