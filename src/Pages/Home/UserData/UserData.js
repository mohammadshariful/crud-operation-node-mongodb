import React from "react";
import useSingleUser from "../../../Hooks/useSingleUser";
import DeleteUser from "../DeleteUser/DeleteUser";
import UpdateUser from "../UpdateUser/UpdateUser";

const UserData = ({ index, user }) => {
  const { _id, name, email, address, organization, phone } = user;
  const [singleuser] = useSingleUser(_id);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{organization}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="d-flex align-items-center">
        <UpdateUser />
        <DeleteUser id={_id} singleuser={singleuser} />
      </td>
    </tr>
  );
};

export default UserData;
