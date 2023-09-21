import green_beans from './assets/green_beans.png';
import github_mark_white from './assets/github_mark_white.png';
import classic_games from './assets/classic_games.png';

function Projects() {
    return (
        <div className="separation">
            <h4 id="projects" className="padding-top">Projects</h4>
            <div className="row project-card">
                <div onClick={()=> {window.open("https://good-coders.gitlab.io/module3-project-gamma", "_blank")}} className="col-4 d-flex pointer">
                    <img style={{ width: "100%", height: "100%"}} src={green_beans} alt="page"/>
                </div>
                <div className="col-8">
                    <div style={{height:"50px"}} className="d-flex align-items-center justify-content-between">
                       <h5 className="pointer" onClick={()=> {window.open("https://good-coders.gitlab.io/module3-project-gamma", "_blank")}}>Green Beings</h5>
                       <img className="pointer" onClick={()=> {window.open("https://github.com/long-guan/green-beings", "_blank")}} id="github-logo" style={{ width: "30px", height: "30px"}} src={github_mark_white} alt="page"/>
                    </div>
                    <p className="pointer" onClick={()=> {window.replace("https://good-coders.gitlab.io/module3-project-gamma")}}>A web application that enables users to establish and manage environmental-focused communities, within which users can organize events aimed at improving various environmental aspects such as air quality or waste reduction.</p>
                    <div className="d-flex flex-wrap" style={{gap: "5px"}}>
                        <span className="badge rounded-pill text-bg-info">React</span>
                        <span className="badge rounded-pill text-bg-info">JavaScript</span>
                        <span className="badge rounded-pill text-bg-info">FastAPI</span>
                        <span className="badge rounded-pill text-bg-info">Bootstrap</span>
                        <span className="badge rounded-pill text-bg-info">Docker</span>
                        <span className="badge rounded-pill text-bg-info">PostgreSQL</span>
                    </div>
                </div>
            </div>
            <div className="row project-card">
                <div onClick={()=> {window.open("https://long-guan.github.io/classic-games/", "_blank")}} className="col-4 d-flex pointer">
                    <img style={{ width: "100%", height: "100%"}} src={classic_games} alt="page"/>
                </div>
                <div className="col-8">
                    <div style={{height:"50px"}} className="d-flex align-items-center justify-content-between">
                       <h5 className="pointer" onClick={()=> {window.open("https://long-guan.github.io/classic-games/", "_blank")}}>Games From Long (Ago)</h5>
                       <img className="pointer" onClick={()=> {window.open("https://github.com/long-guan/classic-games", "_blank")}} id="github-logo" style={{ width: "30px", height: "30px"}} src={github_mark_white} alt="page"/>
                    </div>
                    <p className="pointer" onClick={()=> {window.open("https://long-guan.github.io/classic-games/", "_blank")}}>A web application built with vanilla HTML, CSS, and JS containing the games BattleShip and Tic Tac Toe.
                    </p>
                    <div className="d-flex flex-wrap" style={{gap: "5px"}}>
                        <span className="badge rounded-pill text-bg-info">HTML</span>
                        <span className="badge rounded-pill text-bg-info">CSS</span>
                        <span className="badge rounded-pill text-bg-info">JavaScript</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;