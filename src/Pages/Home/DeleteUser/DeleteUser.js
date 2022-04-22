import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const DeleteUser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteUser = () => {
    console.log("delete user");
  };
  return (
    <>
      <button onClick={handleShow} className="text-danger user-btn">
        <FaTrashAlt />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure? you want to delete!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDeleteUser}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUser;
