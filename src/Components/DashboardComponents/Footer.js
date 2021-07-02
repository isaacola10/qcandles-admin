import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="text-center">
        Copyright &copy; Powered By
        <Link to="https://techspice.com.ng/"> Techspice Limited</Link>
      </div>
    </footer>
  );
};
