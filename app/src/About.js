import React, { useState, useEffect } from 'react';

function About() {
    const [name, setName] = useState("Loooooooooooooooooooooong Guan")

    function typeWriter() {
        let letterOh = "oooooooooooooooooooooo";
        for (let i = letterOh.length; i > 1; i--) {
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
                letterOh = letterOh.slice(0, -1);
                setName("L" + letterOh + "ng Guan");
            }, 100 * i);
        }
    }

    useEffect(() => {
        typeWriter();
    },[]);

    return (
        <div className="separation">
                <h2 data-spy="affix" id="about" className="padding-top">Hi there, I'm <b id="my-name">{ name }</b> 👋</h2>
                <p>Through the four years of using <a target="_blank" rel="noreferrer" className="link" href="https://www.autodesk.com/products/civil-3d/overview?term=1-YEAR&tab=subscription">computer-aided design</a> as a civil engineer, I was always amazed by how it automated many processes and made my job much more efficient. Fueled by amazement and curiosity, I wanted to learn how to create software to automate a process. So, I completed an <a target="_blank" rel="noreferrer" className="link" href="https://www.udemy.com/course/complete-python-bootcamp/">intro to Python course</a> on Udemy in 2021. I had a blast learning it and craved more, so I started <a target="_blank" rel="noreferrer" className="link" href="https://www.theodinproject.com/">The Odin Project</a>, an online fullstack web development course I worked on throughout 2022.</p>
                <p>Fast forward to February of this year, what started as amazement and curiosity led me to take a leap and make a career switch to become a software engineer. Since then, I have been self-learning and recently finished <a target="_blank" rel="noreferrer" className="link" href="https://www.galvanize.com/explore-hack-reactor-coding-bootcamps/">Galvanize Hack Reactor</a> 19-week full-stack software engineering program. </p>
                <p>Outside of coding, I love 🏂, 🏕️, and editing GoPro 🎥 of the trips I have been on.</p>
        </div>
    )
}

export default About;
