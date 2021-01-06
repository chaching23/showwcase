import React, { FC } from "react";
import ParentModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const Modal: FC<Props> = ({ modalIsOpen, closeModal, children }) => (
  <ParentModal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="School Modal"
  >
    <button onClick={closeModal}>close</button>
    {children}
  </ParentModal>
);

export default Modal;
