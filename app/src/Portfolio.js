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
            <div className="d-flex justify-content-between" id="navbar">
                <NameTitle />
                <div className="d-flex justify-content-between align-items-center gap-3">
                    <Navbar />
                    <SocialMedia />
                </div>
            </div>
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
