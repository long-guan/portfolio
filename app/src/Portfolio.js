import NameTitle from './NameTitle';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import MySkills from './MySkills';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div style={{height: "100vh"}} className="col-4 d-flex flex-column justify-content-between sticky-top padding-top padding-bot">
                    <NameTitle />
                    <Navbar />
                    <SocialMedia />
                </div>
                <div data-bs-spy="scroll" data-bs-target="#nav-list" data-bs-offset="5" className="col-8 padding-bot" tabIndex="0">
                    <About />
                    <Projects />
                    <MySkills />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
