import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function PictureModal(props) {
//   let subtitle;
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
    <div>
      <img onClick={openModal} style={{ width: "100%", height: "100%"}} src={props.image} alt="page"/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Picture Modal"
      >
        <div style={{ height: "50%"}}>
            <img style={{ width: "100%", height: "100%"}} src={props.image} alt="page"/>
        </div>

      </Modal>
    </div>
  );
}

export default PictureModal;
