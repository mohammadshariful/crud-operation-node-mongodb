import React from "react";
import { Form } from "react-bootstrap";
import "./UserForm.css";
const UserForm = () => {
  return (
    <div className="form-container">
      <h3>Add a New user</h3>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="organization">
          <Form.Label>Organization</Form.Label>
          <Form.Control type="text" placeholder="organization" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control type="number" placeholder="Phone" />
        </Form.Group>
        <button className="btn btn-primary w-100 mx-auto">Add Record</button>
      </Form>
    </div>
  );
};

export default UserForm;
