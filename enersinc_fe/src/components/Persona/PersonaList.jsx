import React, { useEffect, useState } from "react";
import * as PersonaServer from "./PersonaServer";
import PersonaItem from "./PersonaItem";

const PersonaList = () => {
  const [personas, setPersonas] = useState([]);

  const listPersonas = async () => {
    try {
      const res = await PersonaServer.listPersonas();
      const data = await res.json();
      setPersonas(data.personas);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listPersonas();
  }, []);

  return (
    <div className="row">
      {personas.map((persona) => (
        <PersonaItem
          key={persona.id}
          persona={persona}
          listPersonas={listPersonas}
        />
      ))}
    </div>
  );
};

export default PersonaList;
