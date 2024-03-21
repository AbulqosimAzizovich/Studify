import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../Constants";
import { commonModalTypes } from "../../../../Types/UiKitsType";

export default function CommonModal({ modalData, children }: commonModalTypes) {
  return (
    <Modal
      className={modalData.class}
      isOpen={modalData.isOpen}
      toggle={modalData.toggler}
      centered={modalData.center}
      size={modalData.size}
    >
      {modalData.header && <ModalHeader toggle={modalData.toggler}>{modalData.title}</ModalHeader>}
      <ModalBody className={modalData.bodyClass}>{children}</ModalBody>
      {modalData.footer && (
        <ModalFooter>
          <Btn color="secondary" onClick={modalData.toggler}>
            {Close}
          </Btn>
          <Btn color="primary" onClick={modalData.toggler}>
            {modalData.button ? modalData.button : SaveChanges}
          </Btn>
        </ModalFooter>
      )}
    </Modal>
  );
}
