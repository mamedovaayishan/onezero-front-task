import React from "react";
import { Modal, Row, Col } from "react-bootstrap";

const ProductModal = (props) => {
  const { item, ...rest } = props;

  return (
    <>
      <Modal
        {...rest}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.onHide}>

        </Modal.Header>
        <Modal.Body>
          <Row >
            <Col md={6}>
              <img
                src="https://bakingmischief.com/wp-content/uploads/2019/05/iced-mocha-image-square.jpg"
                className="img-fluid rounded "
              />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center gap-2">
              <h2>{item.name[0]?.value}</h2>
              <h5><strong>Kateqoriya:</strong> {item.categoryName}</h5>
              <h4 className="price">${item.priceSell}</h4>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;
