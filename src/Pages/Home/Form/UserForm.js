import React from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import useStatehandle from "../../../Hooks/useStatehandle";
import "./UserForm.css";
const UserForm = () => {
  const {
    name,
    handleName,
    address,
    handleAddress,
    organization,
    handleOrganization,
    email,
    handleEmail,
    phone,
    handlePhone,
  } = useStatehandle();

  const handleAddUser = (e) => {
    e.preventDefault();
    const user = { name, address, organization, email, phone };

    //send data server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        toast.success("congress add a new user!", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <div className="form-container">
      <h3>Add a New user</h3>
      <Form onSubmit={handleAddUser}>
        <Form.Group className="mb-2" controlId="name">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
            onBlur={handleName}
            type="text"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onBlur={handleAddress}
            type="text"
            placeholder="Address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="organization">
          <Form.Label>Organization</Form.Label>
          <Form.Control
            onBlur={handleOrganization}
            type="text"
            placeholder="organization"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="number">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control
            onBlur={handlePhone}
            type="number"
            placeholder="Phone"
            required
          />
        </Form.Group>
        <button className="btn btn-primary w-100 mx-auto">Add Record</button>
      </Form>
    </div>
  );
};

export default UserForm;
