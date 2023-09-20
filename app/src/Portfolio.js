import NameTitle from './NameTitle';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import SocialMedia from './SocialMedia';

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div style={{height: "550px"}} className="col-4 d-flex flex-column justify-content-between sticky-top pt-5">
                    <NameTitle />
                    <Navbar />
                    <SocialMedia />
                </div>
                <div className="col-8 pt-5">
                    <About />
                    <Projects />
                    <Resume />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
