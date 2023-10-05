import green_beans from './assets/green_beans.png';
import github_mark from './assets/github_mark.png';
import classic_games from './assets/classic_games.png';

function Projects() {
    return (
        <div className="separation">
            <h2 id="projects" className="padding-top">Projects 🗂️</h2>
            <div className="d-flex gap-3 flex-column">
                <div className="row project-card">
                    <div className="col-4 d-flex">
                        <img style={{ width: "100%", height: "100%"}} src={green_beans} alt="deployed-page"/>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-between">
                        <div className="d-flex flex-column justify-content-between">
                        <h4>Green Beings</h4>
                        <p>A web application that enables users to establish and manage environmental-focused communities, within which users can organize events aimed at improving various environmental aspects such as air quality or waste reduction.</p>
                        </div>
                        <div>
                            <div className="d-flex flex-wrap" style={{gap: "5px"}}>
                                <span className="skills">React</span>
                                <span className="skills">JavaScript</span>
                                <span className="skills">FastAPI</span>
                                <span className="skills">Bootstrap</span>
                                <span className="skills">Docker</span>
                                <span className="skills">PostgreSQL</span>
                            </div>
                            <div className="d-flex gap-3 mt-3">
                                <a className="link" target="_blank" href="https://good-coders.gitlab.io/module3-project-gamma/" rel="noreferrer">
                                    <div>Live Preview</div>
                                </a>
                                <a className="link" target="_blank" href="https://github.com/long-guan/green-beings" rel="noreferrer">
                                    <div>View Code</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row project-card">
                    <div className="col-4 d-flex">
                        <img style={{ width: "100%", height: "100%"}} src={classic_games} alt="page"/>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-between">
                        <div className="d-flex flex-column justify-content-between">
                        <h4>Long Loved Classic Games</h4>
                        <p>A web application to play Battleship and Tic Tac Toe built with vanilla HTML, CSS, and JS.
                            </p>
                        </div>
                        <div>
                            <div className="d-flex flex-wrap" style={{gap: "5px"}}>
                                    <span className="skills">HTML</span>
                                    <span className="skills">CSS</span>
                                    <span className="skills">JavaScript</span>
                            </div>
                            <div>
                                <div className="d-flex gap-3 mt-3">
                                    <a className="link" target="_blank" href="https://long-guan.github.io/classic-games/" rel="noreferrer">
                                        <div>Live Preview</div>
                                    </a>
                                    <a className="link" target="_blank" href="https://github.com/long-guan/classic-games" rel="noreferrer">
                                        <div>View Code</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;
