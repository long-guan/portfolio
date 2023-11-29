function MySkills(props) {
  return (
    <div className={"fade-in " + props.mode}>
      <h2 id="skills" className="padding-top">
        Skills 🛠️
      </h2>
      <div
        style={{ gap: "15px" }}
        className={"d-flex flex-column " + props.mode}
      >
        <div className="d-flex flex-column flex-wrap justify-content-center project-card p-2 align-items-center">
          <h3>Languages 📕</h3>
          <div className={"d-flex " + props.mode} style={{ gap: "10px" }}>
            <span className="skills">HTML</span>
            <span className="skills">CSS</span>
            <span className="skills">JavaScript</span>
            <span className="skills">Python</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-wrap justify-content-center project-card p-2 align-items-center">
          <h3>Frontend 🖥️</h3>
          <div className={"d-flex " + props.mode} style={{ gap: "10px" }}>
            <span className="skills">React</span>
            <span className="skills">Bootstrap</span>
            <span className="skills">Tailwind</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-wrap justify-content-center project-card p-2 align-items-center">
          <h3>Backend ⚙️</h3>
          <div className={"d-flex " + props.mode} style={{ gap: "10px" }}>
            <span className="skills">FastAPI</span>
            <span className="skills">Django</span>
            <span className="skills">PostgreSQL</span>
            <span className="skills">RESTful API</span>
            <span className="skills">Microservices</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-wrap justify-content-center project-card p-2 align-items-center">
          <h3>Infrastructure & Deployment ☁️</h3>
          <div className={"d-flex " + props.mode} style={{ gap: "10px" }}>
            <span className="skills">AWS EC2</span>
            <span className="skills">AWS Elastic Beanstalk</span>
            <span className="skills">AWS RDS</span>
            <span className="skills">Docker</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-wrap justify-content-center project-card p-2 align-items-center">
          <h3>Dev Tools 🧰</h3>
          <div className={"d-flex " + props.mode} style={{ gap: "10px" }}>
            <span className="skills">Git</span>
            <span className="skills">GitHub</span>
            <span className="skills">GitLab</span>
            <span className="skills">npm</span>
            <span className="skills">VSCode</span>
            <span className="skills">Webpack</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
