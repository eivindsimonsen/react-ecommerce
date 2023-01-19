import Modal from "react-bootstrap/Modal";
import Gallery from "./Gallery";

function ProductModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Gallery />
    </Modal>
  );
}

export default ProductModal;
