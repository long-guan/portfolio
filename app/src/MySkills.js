function MySkills(props) {
    return (
        <div className={"separation " + props.mode}>
                <h2 id="skills" className="padding-top" >Skills 🛠️</h2>
                <div id="skills-style" className="d-flex flex-wrap">
                    <span className="skills">HTML</span>
                    <span className="skills">CSS</span>
                    <span className="skills">JavaScript</span>
                    <span className="skills">Python</span>
                    <span className="skills">React</span>
                    <span className="skills">Bootstrap</span>
                    <span className="skills">FastAPI</span>
                    <span className="skills">Django</span>
                    <span className="skills">PostgreSQL</span>
                    <span className="skills">Git</span>
                    <span className="skills">GitHub</span>
                    <span className="skills">GitLab</span>
                    <span className="skills">Docker</span>
                    <span className="skills">Microservices</span>
                    <span className="skills">RESTful API</span>
                    <span className="skills">Domain-Driven Design</span>
                </div>
        </div>
    )
}

export default MySkills;
