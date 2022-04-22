import React from "react";
import { Table } from "react-bootstrap";
import DeleteUser from "../DeleteUser/DeleteUser";
import UpdateUser from "../UpdateUser/UpdateUser";
import UserData from "../UserData/UserData";
import "./UsersData.css";

const UsersData = () => {
  const usersData = [1, 2, 3, 4];
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
            <tr>
              <td>1</td>
              <td>Shariul</td>
              <td>Gaffargaon</td>
              <td>Developer</td>
              <td>shariful64@gmail.com</td>
              <td>07135XXXXX</td>
              <td className="d-flex align-items-center">
                <UpdateUser />
                <DeleteUser />
              </td>
            </tr>
            {usersData.map((ar, index) => (
              <UserData key={index} index={index} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UsersData;
