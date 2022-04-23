import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const UpdateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className=" text-success user-btn">
        <FaEdit />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="name">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="organization">
              <Form.Label>Organization</Form.Label>
              <Form.Control type="text" placeholder="organization" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="number">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control type="number" placeholder="Phone" />
            </Form.Group>
            <button className="btn btn-primary w-100 mx-auto">
              Update User
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateUser;
