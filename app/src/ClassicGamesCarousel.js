import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import variance_tic_tac_toe from "./assets/variance_tic_tac_toe_compressed.mp4";
import unbeatable_tic_tac_toe from "./assets/unbeatable_tic_tac_toe_compressed.mp4";
import demo_lazy_knight from "./assets/demo_lazy_knight_compressed.mp4";
import demo_battleship from "./assets/demo_battleship_compressed.mp4";

function ClassicGamesCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-contenter carousel-cont">
          <video
            src={unbeatable_tic_tac_toe}
            controls="controls"
            autoPlay={true}
            width="auto"
            height="500px"
          ></video>
          <p className="carousel-label">
            Implemented Minimax theory with recursion in Tic Tac Toe to create
            an unbeatable computer opponent
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-contenter carousel-cont">
          <video
            src={variance_tic_tac_toe}
            controls="controls"
            width="auto"
            height="500px"
          ></video>
          <p className="carousel-label">
            Created variance in the computer's next move by collecting all the
            moves with the same minimax score and returning the next move
            randomly. See example above where the computer's move randomizes
            between top-left, top-right, bottom-left, and bottom-right because
            all four moves result in the same minimax score (same outcome).
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-contenter carousel-cont">
          <video
            src={demo_lazy_knight}
            controls="controls"
            width="auto"
            height="500px"
          ></video>
          <p className="carousel-label">
            Used breadth-first search algorithm to calculate the least number of
            moves required for the knight to travel from one spot to another.
            Combined setTimeout method and transform CSS property to dynamically
            display the movement of the knight.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-contenter carousel-cont">
          <video
            src={demo_battleship}
            controls="controls"
            width="auto"
            height="500px"
          ></video>
          <p className="carousel-label">
            Utilized a set of boolean variables to ensure that if the computer
            lands a hit, it will continue attacking the adjacent coordinates
            until the ship is sunken to imitate human player logic. See example
            above where the computer targets the adjacent coordinates until ship
            is sunken.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ClassicGamesCarousel;
