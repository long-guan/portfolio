import github_mark from './assets/github_mark.png';
import linkedin_logo from './assets/linkedin_logo.png';
import DarkLightMode from './DarkLightMode';


function SocialMedia() {
    return (
        <div className="d-flex align-items-center" style={{gap: "8px"}}>
            <DarkLightMode />
            <img className="pointer" onClick={()=> {window.open("https://github.com/long-guan", "_blank")}} id="github-logo" style={{ width: "20px", height: "20px"}} src={github_mark} alt="GitHub"/>
            <img className="pointer" onClick={()=> {window.open("https://www.linkedin.com/in/long-guan/", "_blank")}} id="linkedin-logo" style={{ width: "20px", height: "20px"}} src={linkedin_logo} alt="LinkedIn"/>
        </div>
    )
}

export default SocialMedia;
