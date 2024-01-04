import LongGuan_Resume from "./assets/LongGuan_Resume.pdf";
// import { useEffect, useState } from "react";

function Navbar() {
  // const [screenWidth, setScreenWidth] = useState(null);

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   function getScreenWidth() {
  //     setScreenWidth(document.documentElement.clientWidth);
  //   }

  //   window.addEventListener("resize", getScreenWidth);
  //   return () => window.removeEventListener("resize", getScreenWidth);
  // }, []);

  return (
    // <div>
    //   {screenWidth <= 510 ? (
    //     <div className="dropdown">
    //       <button
    //         className="btn btn-secondary dropdown-toggle"
    //         type="button"
    //         id="dropdownMenuButton"
    //         data-toggle="dropdown"
    //         aria-haspopup="true"
    //         aria-expanded="false"
    //       >
    //         Dropdown button
    //       </button>
    //       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //         <a className="dropdown-item" href="#">
    //           Action
    //         </a>
    //         <a className="dropdown-item" href="#">
    //           Another action
    //         </a>
    //         <a className="dropdown-item" href="#">
    //           Something else here
    //         </a>
    //       </div>
    //     </div>
    //   ) : (
    <div className="d-flex align-items-center" id="nav-list">
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
    //   )}
    // </div>
  );
}

export default Navbar;
