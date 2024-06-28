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
        <div className="row" id="ads">
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
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Helping Hands
                  </h5>
                </div>
                <a className="ad-btn" href="https://anshika-26.github.io/HelpingHands2.0/">
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
                  src="https://www.columnfivemedia.com/wp-content/uploads/2021/03/Data-visualization-design-1.png"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Data Visualisation</h5>
                </div>
                <a
                  className="ad-btn"
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
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">WordWise</h5>
                </div>
                <a
                  className="ad-btn"
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
