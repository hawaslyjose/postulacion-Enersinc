const URL = "https://enersincp-be.herokuapp.com/enersincapp/personas/";

export const listPersonas = async () => {
  return await fetch(URL);
};

export const getPersona = async (personaId) => {
  return await fetch(`${URL}${personaId}`);
};

export const registerPersona = async (newPersona) => {
  return await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: String(newPersona.nombre).trim(),
      apellido: String(newPersona.apellido).trim(),
      cedula: parseInt(newPersona.cedula),
      hobbie: String(newPersona.hobbie).trim(),
    }),
  });
};

export const updatePersona = async (personaId, updatePersona) => {
  return await fetch(`${URL}${personaId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: String(updatePersona.nombre).trim(),
      apellido: String(updatePersona.apellido).trim(),
      cedula: parseInt(updatePersona.cedula),
      hobbie: String(updatePersona.hobbie).trim(),
    }),
  });
};

export const deletePersona = async (personaId) => {
  return await fetch(`${URL}${personaId}`, {
    method: "DELETE",
  });
};
