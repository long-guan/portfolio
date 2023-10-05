import NameTitle from './NameTitle';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import MySkills from './MySkills';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

function Portfolio() {
    return (
        <div>
            <nav id="navbar" className="navbar-light-mode">
                <div className="d-flex justify-content-between navbar-spacing align-items-center">
                    <NameTitle />
                    <div className="d-flex justify-content-between align-items-center gap-3">
                        <Navbar />
                        <SocialMedia />
                    </div>
                </div>
                <hr style={{margin: "0", height: "2px", border: "0", background: "black"}}/>
            </nav>
            <div className="body-container" data-bs-spy="scroll" data-bs-target="#nav-list" data-bs-offset="5" tabIndex="0">
                <About />
                <Projects />
                <MySkills />
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio;
