import React from "react";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <div className="text-center bg-dark text-white mt-5 py-3">
      <p>&copy; {fullYear} All right Reserved</p>
      <p>Developer by &hearts; Mohammad Shariful</p>
    </div>
  );
};

export default Footer;
