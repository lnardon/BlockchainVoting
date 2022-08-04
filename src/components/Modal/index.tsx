import { ReactNode } from "react";
import Modal from "react-modal";

import "./styles.css";
import CloseIcon from "./close.svg";

interface PropsInterface {
  isOpen: boolean;
  handleClose: () => {};
  renderProps: () => ReactNode;
}

const BaseModal: any = ({
  isOpen,
  handleClose,
  renderProps,
}: PropsInterface) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <img
        className="closeIcon"
        src={CloseIcon}
        alt="Close"
        onClick={handleClose}
      />
      {renderProps()}
    </Modal>
  );
};

export default BaseModal;
