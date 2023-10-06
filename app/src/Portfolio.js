import React, { useState, useEffect } from 'react';
import NameTitle from './NameTitle';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import MySkills from './MySkills';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
import DarkLightMode from './DarkLightMode';

function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);
    const [mode, setMode] = useState("light-mode")
    const [gitHubMode, setGitHubMode] = useState("");

    function switchMode() {
        setDarkMode(!darkMode);
        localStorage.setItem('darkMode', !darkMode)
    }

    function checkLocalDarkMode() {
        if (localStorage.getItem('darkMode') === 'true') {
            setDarkMode(true);
        }
    }

    useEffect(() => {
        checkLocalDarkMode();
        if (darkMode) {
            setMode("dark-mode");
            setGitHubMode("github-logo-white");
        } else {
            setMode("light-mode")
            setGitHubMode("");
        }
    },[darkMode])

    return (
        <div>
            <nav id="navbar" className={mode}>
                <div className="d-flex justify-content-between navbar-spacing align-items-center">
                    <NameTitle />
                    <div className="d-flex justify-content-between align-items-center gap-3">
                        <Navbar />
                        <div className="d-flex align-items-center" style={{gap: "8px"}}>
                            <DarkLightMode switchMode={switchMode} darkMode={darkMode}/>
                            <SocialMedia gitHubMode={gitHubMode}/>
                        </div>
                    </div>
                </div>
                <hr style={{margin: "0", height: "2px", border: "0"}}/>
            </nav>
            <div className={"body-container " + mode} data-bs-spy="scroll" data-bs-target="#nav-list" data-bs-offset="5" tabIndex="0">
                <About />
                <Projects mode={mode} />
                <MySkills mode={mode} />
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio;
