import React from "react";
import * as PersonaServer from "./PersonaServer";
import { useNavigate } from "react-router-dom";

const PersonaItem = ({ persona, listPersonas }) => {
  const navigate = useNavigate();

  const handleDelete = async (personaId) => {
    await PersonaServer.deletePersona(personaId);
    listPersonas();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-tittle">
          {persona.nombre}
          <button
            onClick={() => navigate(`/updatePersona/${persona.id}`)}
            className="ms-5 btn btn-sm btn-info"
          >
            Modificar
          </button>
        </h3>
        <p className="card-text">
          Apellido: <strong>{persona.apellido}</strong>
        </p>
        <p className="card-text">
          Cedula: <strong>{persona.cedula}</strong>
        </p>
        <p className="card-text">
          Hobbie: <strong>{persona.hobbie}</strong>
        </p>
        <button
          onClick={() => persona.id && handleDelete(persona.id)}
          className="btn btn-danger my-2"
        >
          Eliminar persona
        </button>
      </div>
    </div>
  );
};

export default PersonaItem;
