import green_beans from './assets/green_beans.png';
import github_mark_white from './assets/github_mark_white.png';

function Projects() {
    return (
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
            <h4 id="projects">Projects</h4>
            <div className="row project-card pt-2 pb-2">
                <div className="col-4">
                    <img style={{ width: "100%", height: "100%"}} src={green_beans} alt="page"/>
                </div>
                <div className="col-8">
                    <div style={{height:"50px"}} className="d-flex align-items-center justify-content-between">
                       <h5 className="pointer" onClick={()=> {window.location.replace("https://good-coders.gitlab.io/module3-project-gamma")}}>Green Beings</h5>
                       <img className="pointer" onClick={()=> {window.location.replace("https://github.com/long-guan/green-beings")}} id="github-logo" style={{ width: "40px", height: "40px"}} src={github_mark_white} alt="page"/>
                    </div>
                    <p className="pointer" onClick={()=> {window.location.replace("https://good-coders.gitlab.io/module3-project-gamma")}}>A web application that enables users to establish and manage environmental-focused communities, organizing events aimed at improving various aspects such as air quality or waste reduction. Users have the ability to initiate communities tailored to specific environmental concerns and subsequently plan scheduled events within those communities, all designed to positively impact the chosen environmental focus.</p>
                    <div className="d-flex" style={{gap: "5px"}}>
                        <span className="badge rounded-pill text-bg-info">React</span>
                        <span className="badge rounded-pill text-bg-info">JavaScript</span>
                        <span className="badge rounded-pill text-bg-info">FastAPI</span>
                        <span className="badge rounded-pill text-bg-info">Bootstrap</span>
                        <span className="badge rounded-pill text-bg-info">Docker</span>
                        <span className="badge rounded-pill text-bg-info">PostgreSQL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
