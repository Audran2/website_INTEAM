import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FilterBar from '../components/FilterBar';
import SearchBar from "../components/SearchBar";
import ClientInfos from "../components/ClientInfos.js" ;
import DetailsClient from "../components/DetailsClient";


const Clients = () => {
  const [clientClick, setclientClick] = useState("")
  const clientClicked = (info) => {
      setclientClick(info)
  }
  return (
    <div className="page-main">
      <Navbar />
      <div className="container">
        <div className="pageContainer">
          <SearchBar />
          <br/>
          <br/>
          <FilterBar inputName={"Region"}/>
          <div className="clients">
            <div>
            <ClientInfos  clientClicked={clientClicked}/>
            </div>
            <DetailsClient clientClick={clientClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
