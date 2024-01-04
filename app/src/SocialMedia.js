import github_mark from "./assets/github_mark.png";
import linkedin_logo from "./assets/linkedin_logo.png";

function SocialMedia(props) {
  return (
    <div className="d-flex align-items-center navbar-social">
      <img
        className={props.gitHubMode + " pointer"}
        onClick={() => {
          window.open("https://github.com/long-guan", "_blank");
        }}
        id="github-logo"
        src={github_mark}
        alt="GitHub"
      />
      <img
        className="pointer"
        onClick={() => {
          window.open("https://www.linkedin.com/in/long-guan/", "_blank");
        }}
        id="linkedin-logo"
        src={linkedin_logo}
        alt="LinkedIn"
      />
    </div>
  );
}

export default SocialMedia;
