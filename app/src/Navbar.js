import LongGuan_Resume from "./assets/LongGuan_Resume.pdf";

function Navbar() {
  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="d-flex align-items-center gap-3" id="nav-list">
      <a onClick={(e) => onPress(e)} href="#about">
        <div data-to-scrollspy-id="about">About Me</div>
      </a>
      <a onClick={(e) => onPress(e)} href="#projects">
        <div data-to-scrollspy-id="projects">Projects</div>
      </a>
      <a onClick={(e) => onPress(e)} href="#skills">
        <div data-to-scrollspy-id="skills">Skills</div>
      </a>
      <a onClick={(e) => onPress(e)} href="#contact">
        <div data-to-scrollspy-id="contact">Contact</div>
      </a>
      <a
        className="pointer"
        href={LongGuan_Resume}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  );
}

export default Navbar;
