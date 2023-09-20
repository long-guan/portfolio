function Navbar() {
    return (
        <div>
            <div id="nav-list" className="sticky-top">
                <ul className="nav flex-column nav-pills menu-sidebar">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">My Skills</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
