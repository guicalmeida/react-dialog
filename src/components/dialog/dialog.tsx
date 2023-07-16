import { ReactNode, useEffect } from "react";
import CloseIcon from "./closeIcon.svg";
import {
  Backdrop,
  Body,
  DialogContainer,
  Header,
  ModalContainer,
} from "./style";

type DialogProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  children?: ReactNode;
};

export default function Dialog({
  closeOnOverlayClick,
  isOpen,
  onClose,
  children,
  title,
}: DialogProps) {
  useEffect(() => {
    if (isOpen) {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.code === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleEsc);

      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, onClose]);

  return isOpen ? (
    <ModalContainer>
      <Backdrop
        onClick={() => closeOnOverlayClick && onClose()}
        data-testid="backdrop"
      ></Backdrop>
      <DialogContainer>
        <Header>
          <h1>{title}</h1>
          <button onClick={() => onClose()} aria-label="fechar">
            <img src={CloseIcon} alt="Ícone de fechar" />
          </button>
        </Header>
        {children && <Body>{children}</Body>}
      </DialogContainer>
    </ModalContainer>
  ) : null;
}
