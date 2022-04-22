import React from "react";
import DeleteUser from "../DeleteUser/DeleteUser";
import UpdateUser from "../UpdateUser/UpdateUser";

const UserData = ({ index }) => {
  console.log(index);
  return (
    <tr>
      <td>{index + 1}</td>
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
  );
};

export default UserData;
