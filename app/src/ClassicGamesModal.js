import React from "react";
import Modal from "react-modal";
import ClassicGamesCarousel from "./ClassicGamesCarousel";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    height: "85%",
    backgroundColor: "black",
    borderRadius: "10px",
  },
};

function ClassicGamesModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="link pointer">
      <a style={{ textDecoration: "underline" }} onClick={openModal}>
        View Features
      </a>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Picture Modal"
      >
        <ClassicGamesCarousel />
      </Modal>
    </div>
  );
}

export default ClassicGamesModal;
