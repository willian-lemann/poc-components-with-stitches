import { ReactNode } from "react";
import { Container, Label, CloseIcon } from "./styles";

interface HeaderProps {
  title: string;
  onCloseModal: () => void;
  children?: ReactNode;
}

export const Header = ({ children, title, onCloseModal }: HeaderProps) => {
  return (
    <Container className="modal-header">
      {children ?? <Label>{title}</Label>}

      {children ?? <CloseIcon onClick={() => onCloseModal()} />}
    </Container>
  );
};
