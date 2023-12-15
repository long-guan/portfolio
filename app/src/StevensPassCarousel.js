import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import authentication_stevenspass from "./assets/authentication_stevenspass_compressed.mp4";
import interactive_stevenspass from "./assets/interactive_stevenspass_compressed.mp4";
import posting_stevenspass from "./assets/posting_stevenspass_compressed.mp4";

function StevensPassCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="carousel-cont">
          <video
            src={interactive_stevenspass}
            controls="controls"
            autoPlay={true}
            width="auto"
            height="80%"
          ></video>
          <p style={{ width: "80%" }} className="carousel-label">
            Transformed a plain image into an interactive map using z-index to
            layer the interactive elements on top of the image while hiding the
            image mapping elements behind the image.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-cont">
          <video
            src={authentication_stevenspass}
            controls="controls"
            width="auto"
            height="80%"
          ></video>
          <p style={{ width: "80%" }} className="carousel-label">
            Secured app with JWT access token and refresh token to provide
            authorization and authentication. Refresh token allows users to
            remain signed in for longer periods of time while providing
            additional security. See example above where user cannot add video
            until user is signed in.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-cont">
          <video
            src={posting_stevenspass}
            controls="controls"
            width="auto"
            height="80%"
          ></video>
          <p style={{ width: "80%" }} className="carousel-label">
            Users who are signed in are able to add videos and comments to a ski
            trail.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default StevensPassCarousel;
