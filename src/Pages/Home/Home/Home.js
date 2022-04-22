import React from "react";
import { Container } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import UserForm from "../Form/UserForm";
import UsersData from "../UsersData/UsersData";
import "./Home.css";
const Home = () => {
  return (
    <Container>
      <h3 className="d-flex align-items-center text-success">
        <span>
          <FaUser />
        </span>
        Customer Management System
      </h3>
      <section className="home-container d-flex justify-content-between flex-column flex-md-row my-4">
        <UserForm />
        <UsersData />
      </section>
    </Container>
  );
};

export default Home;
