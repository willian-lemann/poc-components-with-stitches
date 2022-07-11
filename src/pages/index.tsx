import { useRef } from "react";
import { Modal, ModalHeader, ModalHandles } from "../components/Modal";

import { Button, Container } from "../styles/home.styles";

const Home = () => {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.closeModal();
  };

  return (
    <Container>
      home page
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal ref={modalRef} type="sideRight">
        <ModalHeader title="Modal header" onCloseModal={handleCloseModal} />
      </Modal>
    </Container>
  );
};

export default Home;
