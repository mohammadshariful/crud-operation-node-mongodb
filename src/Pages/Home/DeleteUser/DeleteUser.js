import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import useUsers from "../../../Hooks/useUsers";
const DeleteUser = ({ id, singleuser }) => {
  const { users, setUsers } = useUsers();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteUser = (id) => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
          toast.error("delete a user!", {
            position: toast.POSITION.TOP_CENTER,
          });
          handleClose();
        }
      });
  };

  return (
    <>
      <button onClick={handleShow} className="text-danger user-btn">
        <FaTrashAlt />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleuser?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are your sure? you want to delete!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDeleteUser(id)}>
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
