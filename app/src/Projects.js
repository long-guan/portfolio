import green_beans from "./assets/green_beans.png";
import classic_games from "./assets/classic_games.png";
import ClassicGamesModal from "./ClassicGamesModal";
import StevensPassModal from "./StevensPassModal";
import stevens_pass_imap from "./assets/stevens_pass_imap.png";

function Projects(props) {
  return (
    <div className="fade-in">
      <h2 id="projects" className="padding-top projects-header">
        Projects 🗂️
      </h2>
      <div className={"d-flex gap-3 flex-column " + props.mode}>
        <div className="row project-card" style={{ margin: "0" }}>
          <div className="d-flex">
            <img
              style={{ width: "100%", height: "100%" }}
              src={stevens_pass_imap}
              alt="Stevens Pass iMap home page"
            />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column justify-content-between">
              <h4 className="projects-subheader">Stevens Pass iMap</h4>
              <p className="projects-description">
                Transformed a non-interactive PDF map of Stevens Pass Ski Resort
                into an interactive CRUD app built with React and Tailwind CSS
                frontend with Django and PostgreSQL backend. Backend is deployed
                on AWS.
              </p>
            </div>
            <div>
              <div
                className={"d-flex flex-wrap " + props.mode}
                style={{ gap: "5px" }}
              >
                <span className="skills">React</span>
                <span className="skills">Tailwind CSS</span>
                <span className="skills">Django</span>
                <span className="skills">PostgreSQL</span>
                <span className="skills">RESTful API</span>
                <span className="skills">AWS EC2</span>
                <span className="skills">AWS RDS</span>
                <span className="skills">AWS Elastic Beanstalk</span>
                <span className="skills">HTML</span>
                <span className="skills">CSS</span>
                <span className="skills">JavaScript</span>
              </div>
              <div>
                <div
                  className="d-flex mt-3 projects-btn"
                  style={{ gap: "5px" }}
                >
                  <a
                    className="link"
                    target="_blank"
                    href="https://long-guan.github.io/snowstats/"
                    rel="noreferrer"
                  >
                    <div>
                      <span className="project-card-view">View</span> Live App
                    </div>
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/long-guan/snowstats"
                    rel="noreferrer"
                  >
                    <div>
                      <span className="project-card-view">View</span> Code
                    </div>
                  </a>
                  <StevensPassModal />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row project-card" style={{ margin: "0" }}>
          <div className="d-flex">
            <img
              style={{ width: "100%", height: "100%" }}
              src={classic_games}
              alt="Long Loved Classic Games home page"
            />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column justify-content-between">
              <h4 className="projects-subheader">Long Loved Classic Games</h4>
              <p className="projects-description">
                A web application where you can play Battleship against a
                computer with human-like logic, engage in a game of Tic Tac Toe
                against an unbeatable computer, and experience Lazy Knight, all
                built with vanilla HTML, CSS, and JS.
              </p>
            </div>
            <div>
              <div
                className={"d-flex flex-wrap " + props.mode}
                style={{ gap: "5px" }}
              >
                <span className="skills">HTML</span>
                <span className="skills">CSS</span>
                <span className="skills">JavaScript</span>
              </div>
              <div>
                <div
                  className="d-flex mt-3 projects-btn"
                  style={{ gap: "5px" }}
                >
                  <a
                    className="link"
                    target="_blank"
                    href="https://long-guan.github.io/classic-games/"
                    rel="noreferrer"
                  >
                    <div>
                      <span className="project-card-view">View</span> Live App
                    </div>
                  </a>
                  <a
                    className="link"
                    target="_blank"
                    href="https://github.com/long-guan/classic-games"
                    rel="noreferrer"
                  >
                    <div>
                      <span className="project-card-view">View</span> Code
                    </div>
                  </a>
                  <ClassicGamesModal />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row project-card" style={{ margin: "0" }}>
          <div className="d-flex">
            <img
              style={{ width: "100%", height: "100%" }}
              src={green_beans}
              alt="Green Beings home page"
            />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column justify-content-between">
              <h4 className="projects-subheader">Green Beings</h4>
              <p className="projects-description">
                A web application that enables users to establish and manage
                environmental-focused communities, within which users can
                organize events aimed at improving various environmental aspects
                such as air quality or waste reduction.
              </p>
              <p className="projects-description">
                Note: Backend FastAPI server is no longer hosted and no longer
                operational for the Live App.
              </p>
            </div>
            <div>
              <div
                className={"d-flex flex-wrap " + props.mode}
                style={{ gap: "5px" }}
              >
                <span className="skills">React</span>
                <span className="skills">JavaScript</span>
                <span className="skills">RESTful API</span>
                <span className="skills">FastAPI</span>
                <span className="skills">Bootstrap</span>
                <span className="skills">Docker</span>
                <span className="skills">PostgreSQL</span>
              </div>
              <div className="d-flex mt-3 projects-btn" style={{ gap: "5px" }}>
                <a
                  className="link"
                  target="_blank"
                  href="https://good-coders.gitlab.io/module3-project-gamma/"
                  rel="noreferrer"
                >
                  <div>
                    <span className="project-card-view">View</span> Live App
                  </div>
                </a>
                <a
                  className="link"
                  target="_blank"
                  href="https://github.com/long-guan/green-beings"
                  rel="noreferrer"
                >
                  <div>
                    <span className="project-card-view">View</span> Code
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
