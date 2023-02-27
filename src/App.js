import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./page/Clients";
import Home from "./page/Home";
import Intervention from "./page/Intervention";
import Importation from "./page/Importation";
import Report from "./page/Report";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/importation" element={<Importation />} />
        <Route path="/clients" element = {<Clients />} />
        <Route path="/report" element = {<Report />} />
        <Route path="/intervention" element={<Intervention />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
