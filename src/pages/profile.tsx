import { useRef } from "react";
import { Modal, ModalHandles } from "../components/Modal";

import { Container, Button, Header } from "../styles/home.styles";

const Profile = () => {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.closeModal();
  };

  return (
    <Container>
      Profile Page
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal ref={modalRef} type="sideLeft">
        <Header>
          <strong>custom header</strong>

          <button onClick={handleCloseModal}>X</button>
        </Header>
        <main>content of modal</main>
      </Modal>
    </Container>
  );
};

export default Profile;
