import { useState } from "react";

const useStatehandle = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleOrganization = (e) => {
    setOrganization(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  return {
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
  };
};

export default useStatehandle;
