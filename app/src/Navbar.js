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
        <div>
            <div className="d-flex flex-column gap-2" id="nav-list">
                <a onClick={(e) => onPress(e)} href="#about">
                    <div data-to-scrollspy-id="about">About Me</div>
                </a>
                <a onClick={(e) => onPress(e)} href="#projects">
                    <div data-to-scrollspy-id="projects">Projects</div>
                </a>
                <a onClick={(e) => onPress(e)} href="#skills">
                    <div data-to-scrollspy-id="skills">My Skills</div>
                </a>
            </div>
        </div>
    )
}

export default Navbar;
