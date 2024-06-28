import React from "react";
import "./Menus.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
import { Link } from "react-scroll";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user"
              alt="profile-pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home "
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="About "
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcAbout />
                About
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="techstack "
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                {" "}
                <FcBiotech />
                Tech Stacks
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                {" "}
                <FcVideoProjector />
                Projects
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="Education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                {" "}
                <FcReadingEbook />
                Education
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="work "
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                {" "}
                <FcPortraitMode />
                Position of Responsibilty
                </Link>
              </div>
            
           
              
              <div className="nav-link">
              <Link
                  to="contact "
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                {" "}
                <FcBusinessContact />
                Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-item">
            <div className="nav-link">
              {" "}
              <FcHome title="Home" />
            </div>
            <div className="nav-link">
              {" "}
              <FcAbout title="About" />
            </div>
            <div className="nav-link">
              {" "}
              <FcPortraitMode title="Position of Responsibilty " />
            </div>
            <div className="nav-link">
              {" "}
              <FcBiotech title="Tech Stacks" />
            </div>
            <div className="nav-link">
              {" "}
              <FcReadingEbook title="Education" />
            </div>
            <div className="nav-link">
              {" "}
              <FcVideoProjector title="Projects" />
            </div>
            <div className="nav-link">
              {" "}
              <FcVoicePresentation title="Testimonials" />
            </div>
            <div className="nav-link">
              {" "}
              <FcBusinessContact title="Contact" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
