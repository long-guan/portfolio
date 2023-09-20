import github_mark_white from './assets/github_mark_white.png';
import linkedin_logo from './assets/linkedin_logo.png';


function SocialMedia() {
    return (
        <div className="d-flex" style={{gap: "10px"}}>
            <img className="pointer" onClick={()=> {window.open("https://github.com/long-guan", "_blank")}} id="github-logo" style={{ width: "30px", height: "30px"}} src={github_mark_white} alt="page"/>
            <img className="pointer" onClick={()=> {window.open("https://www.linkedin.com/in/long-guan/", "_blank")}} id="linkedin-logo" style={{ width: "30px", height: "30px"}} src={linkedin_logo} alt="page"/>
        </div>
    )
}

export default SocialMedia;
