import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import PersonaList from "./components/Persona/PersonaList";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonaForm from "./components/Persona/PersonaForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar1 />
    <div className="container my-4">
      <Routes>
        <Route exact path="/" element={<PersonaList />} />
        <Route path="/personaform" element={<PersonaForm />} />
        <Route path="/updatePersona/:id" element={<PersonaForm />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
