import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalClass = () => {
    setShowModal(!showModal);

    console.log(showModal);
  };

  return (
    <div className="navContainer">
      <div className={`navbar`}>
        <div className={`responsive`}>
          <h1>Shortly</h1>
          <div className="nav1">
            <div className={showModal ? "navi show" : "navi hide"}>
              <ul className="anchors">
                <li>
                  <a href="/feature">Features</a>
                </li>
                <li>
                  <a href="/feature">Pricing</a>
                </li>
                <li>
                  <a href="/feature">Resources</a>
                </li>
              </ul>
              <div className="nav2">
                <button className="login">Login</button>
                <button className="sign-up">Sign Up</button>
              </div>
            </div>
          </div>
          <div onClick={() => showModalClass()} className="nav-toggle">
            {showModal ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      {/* <div className="newNav">
        <h1>Shortly</h1>
        <div onClick={() => showModalClass()} className="nav-toggle">
          {showModal ? <FaTimes /> : <FaBars />}
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
