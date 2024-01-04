import React, { useState, useEffect } from "react";

function About() {
  const [oh, setOh] = useState("oooooooooooooooooooooo");

  function deleteOh() {
    let letterOh = "oooooooooooooooooooooo";
    for (let i = letterOh.length; i > 1; i--) {
      setTimeout(() => {
        letterOh = letterOh.slice(0, -1);
        setOh(letterOh);
      }, 100 * i);
    }
  }

  function handleDeleteOh() {
    let letterOh = oh;
    for (let i = letterOh.length; i > 1; i--) {
      setTimeout(() => {
        letterOh = letterOh.slice(0, -1);
        setOh(letterOh);
      }, 100 * i);
    }
  }

  function addOh() {
    if (oh.length < 20) {
      setOh(oh + "o");
    }
  }

  useEffect(() => {
    deleteOh();
  }, []);

  return (
    <div>
      <h2 data-spy="affix" id="about" className="padding-top about-header">
        Hi there, I'm{" "}
        <b onMouseEnter={addOh} id="my-name">
          L{oh}ng Guan
        </b>{" "}
        <span className="pointer" onClick={handleDeleteOh}>
          👋
        </span>
      </h2>
      <div className="fade-in">
        <p className="about-body">
          Through my four years of using{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://www.autodesk.com/products/civil-3d/overview?term=1-YEAR&tab=subscription"
          >
            computer-aided design
          </a>{" "}
          in my role as a civil engineer, I consistently marveled at its ability
          to automate numerous processes and calculations. Fueled by this
          amazement, I embarked on a journey to learn about the basics of
          software. In 2021, I began working on a beginner online{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://www.udemy.com/course/complete-python-bootcamp/"
          >
            Python course
          </a>
          , dedicating my free time after work. After a few months, I completed
          the course and found that I love solving problems through coding,
          leading me to crave more. Therefore, I started{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://www.theodinproject.com/"
          >
            The Odin Project
          </a>
          , an online Web Development course, which I worked on after work
          throughout 2022.{" "}
        </p>
        <p className="about-body">
          Fast forward to February of this year and after almost two years of
          self-learning, I made a bold decision to switch careers and pursue my
          aspiration to become a software engineer. Since then, I successfully
          completed a{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://www.galvanize.com/explore-hack-reactor-coding-bootcamps/"
          >
            19-week full-stack software engineering program
          </a>{" "}
          and remained devoted to learning new technologies and building
          projects. I am excited about the prospect of applying my skills in a
          professional setting and welcome any job opportunities that align with
          my passion and expertise.
        </p>
        <p className="about-body">
          Since embarking on this journey, I have come to realize that software
          engineering is not only about finding a solution that works, but also
          about finding a solution that is efficient, user-centric, and
          cost-effective. I am excited about the opportunity to apply my
          problem-solving and collaborative skills developed in civil
          engineering to develop innovative, technically robust, and
          user-friendly software.
        </p>
        <p className="about-body">
          Outside of coding, I love <span id="snowboard">🏂</span>,{" "}
          <span id="camping">🏕️</span>, and editing GoPro{" "}
          <span id="gopro">🎥</span> of the trips I have been on.
        </p>
      </div>
    </div>
  );
}

export default About;
