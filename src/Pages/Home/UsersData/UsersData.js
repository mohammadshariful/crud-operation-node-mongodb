import React from "react";
import { Table } from "react-bootstrap";
import useUsers from "../../../Hooks/useUsers";
import UserData from "../UserData/UserData";
import "./UsersData.css";
const UsersData = () => {
  const { users } = useUsers();

  return (
    <div className="users-data-container">
      <h3 className="text-center text-success">Users Information</h3>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Organization</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserData key={user._id} user={user} index={index} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UsersData;
