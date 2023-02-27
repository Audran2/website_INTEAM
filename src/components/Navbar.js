import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="../assets/png/logoInteam.png" alt="" className="logoImg" />
      <ul>
        <NavLink>
          <li className="userInfo">
            <img
              src="../assets/png/useravatar.png"
              alt=""
              className="imgAvatar"
            />
            <div className="info">
              <span className="AV-name">Tangy David</span>
              <span className="AV-mail">t.david@gmail.com</span>
            </div>
          </li>
        </NavLink>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="list">
            <img src="../assets/svg/Global.svg" alt="" className="IconList" />
            <span className="nameList">Vue global</span>
          </li>
        </NavLink>
        <NavLink
          to="/importation"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="list">
            <img src="../assets/svg/importation1.svg" alt="" className="IconList" />
            <span className="nameList">Importation</span>
          </li>
        </NavLink>
        <NavLink
          to="/clients"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="list">
            <img src="../assets/svg/client.svg" alt="" className="IconList" />
            <span className="nameList">Clients</span>
          </li>
        </NavLink>
        <NavLink
          to="/report"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="list">
            <img src="../assets/svg/rapportSAV.svg" alt="" className="IconList" />
            <span className="nameList">Rapport SAV</span>
          </li>
        </NavLink>
        <NavLink
          to="/intervention"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="list">
            <img src="../assets/svg/intervention.svg" alt="" className="IconList" />
            <span className="nameList">Intervention</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
