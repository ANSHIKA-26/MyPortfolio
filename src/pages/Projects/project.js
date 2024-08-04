import React from "react";
import "./project.css";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are links to some projects I have worked on recently :-
        </p>
        {/* card design */}
        <div className="row" id="ods">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://t4.ftcdn.net/jpg/03/60/32/39/360_F_360323951_XtIbMPnjD5zHOmSh2CFpKvo4jvkPXjau.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongo</span>
              </div>
              <div className="card-body text-center">
                <div className="odtitle m-auto">
                  <h5 className="text-uppercase">Helping Hands</h5>
                </div>
                <a
                  className="odbtn"
                  href="https://helping-hands-deployement2.netlify.app/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Data Science</span>
                <img
                  src="https://assets.everspringpartners.com/dims4/default/e797ff3/2147483647/strip/true/crop/620x250+0+0/resize/620x250!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fe4%2F2a%2Fe9a3904c4f17a084c100bbbb5eca%2Fdata-visualization-for-accountants-620x250.jpg"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
              </div>
              <div className="card-body text-center">
                <div className="odtitle m-auto">
                  <h5 className="text-uppercase">Data Visualisation</h5>
                </div>
                <a
                  className="odbtn"
                  href="https://public-paws.wmcloud.org/User:Arora.anshika.26/Microtask_final_outreachy.ipynb"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44X1OznMfHDgwnaUhh7j7NEHdftSx84Cstg&s"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>

                <span className="card-detail-badge">JavaScript</span>
              </div>
              <div className="card-body text-center">
                <div className="odtitle m-auto">
                  <h5 className="text-uppercase">WordWise</h5>
                </div>
                <a
                  className="odbtn"
                  href="https://anshika-26.github.io/WordWise.github.io/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
