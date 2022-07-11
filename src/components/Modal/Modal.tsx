import {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  ReactNode,
} from "react";
import { Header } from "./Header";

import { Overlay, Container, Content } from "./styles";

export interface ModalHandles {
  openModal: () => void;
  closeModal: () => void;
}

interface ModalProps {
  type: "sideLeft" | "center" | "sideRight";
  children?: ReactNode;
}

export const Modal = forwardRef<ModalHandles, ModalProps>(
  ({ children, type }, ref) => {
    const [visible, setVisible] = useState(false);

    const openModal = () => {
      setVisible(true);
    };

    const closeModal = () => {
      setVisible(false);
    };

    const handleClickOutsideModal = (event: any) => {
      const { id } = event.target;

      if (id === "modal-overlay") {
        closeModal();
      }
    };

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
    }));

    useEffect(() => {
      const handleKeyEvent = (event: globalThis.KeyboardEvent) => {
        if (event.key === "Escape") {
          closeModal();
        }
      };

      document.addEventListener("keyup", handleKeyEvent);

      return () => {
        document.removeEventListener("keyup", handleKeyEvent);
      };
    }, []);

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
    }));

    return (
      <Overlay
        id="modal-overlay"
        onKeyUp={handleClickOutsideModal}
        onMouseDown={handleClickOutsideModal}
        visible={visible}
        type={type}
      >
        <Container
          onKeyDown={handleClickOutsideModal}
          type={type}
          visible={visible}
        >
          <Content>{children}</Content>
        </Container>
      </Overlay>
    );
  }
);
