import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import variance_tic_tac_toe from "./assets/variance_tic_tac_toe_compressed.mp4";
import unbeatable_tic_tac_toe from "./assets/unbeatable_tic_tac_toe_compressed.mp4";

function ClassicGamesCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-contenter">
          <video
            src={unbeatable_tic_tac_toe}
            controls="controls"
            autoPlay={true}
            width="500px"
            height="500px"
          ></video>
          <p className="carousel-label">
            Implemented Minimax theory with recursion in Tic Tac Toe to create
            an unbeatable computer opponent
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-column align-items-center justify-contenter">
          <video
            src={variance_tic_tac_toe}
            controls="controls"
            width="500px"
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
    </Carousel>
  );
}

export default ClassicGamesCarousel;

{
  /* <li>
  Implemented Minimax theory with recursion in Tic Tac Toe to
  create an unbeatable computer opponent
</li>
<li>
  Created variance in the computer's next move by collecting all
  the moves with the same minimax score (where the same minimax
  score indicates the same outcome) and returning the next move
  randomly
</li>
<li>
  Used breadth-first search algorithm in Lazy Knight to calculate
  the least number of moves required for the knight to travel from
  one square to another
</li>
<li>
  Used z-index and position to stack two divs on top of each other
  in Battleship, allowing one div to display the ships on the
  board and the other div to display the coordinates that were
  attacked
</li>
<li>
  Combined setTimeout method and transform CSS property to
  dynamically display the movement of the Knight in Lazy Knight,
  enhancing the user experience
</li>
<li>
  In Battleship, utilized a set of boolean variables to ensure
  that if the computer lands a hit, it will continue attacking the
  adjacent coordinates until the ship is sunken to imitate human
  player logic
</li> */
}
