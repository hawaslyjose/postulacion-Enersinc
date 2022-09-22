import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import * as PersonaServer from "./PersonaServer";
import { useNavigate, useParams } from "react-router-dom";

const PersonaForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const initialState = {
    id: 0,
    nombre: "",
    apellido: "",
    cedula: "",
    hobbie: "",
  };
  const [persona, setPersona] = useState(initialState);

  const handleChange = (e) => {
    setPersona({ ...persona, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await PersonaServer.registerPersona(persona);
        const data = await res.json();

        if (data.message === "satisfactorio") {
          setPersona(initialState);
        }
      } else {
        await PersonaServer.updatePersona(params.id, persona);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getPersona = async (PersonaId) => {
    try {
      const res = await PersonaServer.getPersona(PersonaId);
      const data = await res.json();
      console.log(data);
      const { nombre, apellido, cedula, hobbie } = data.persona;
      setPersona({ nombre, apellido, cedula, hobbie });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getPersona(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form onSubmit={handleSubmit}>
        <Container id="main-logo" className="text-center w-100">
          <div>
            <img
              className="logo mb-4"
              src={require("../img/enersinc.png")}
              alt=""
            />
          </div>
        </Container>
        <Form.Group className="mb-3 mx-auto " controlId="text">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            name="nombre"
            value={persona.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            value={persona.apellido}
            onChange={handleChange}
            placeholder="Apellido"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Cedula</Form.Label>
          <Form.Control
            type="number"
            name="cedula"
            value={persona.cedula}
            onChange={handleChange}
            placeholder="Cedula"
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="text">
          <Form.Label>Hobbie</Form.Label>
          <Form.Control
            type="text"
            name="hobbie"
            value={persona.hobbie}
            onChange={handleChange}
            placeholder="Hobbie"
          />
        </Form.Group>
        <div className="d-grid">
          {params.id ? (
            <Button
              variant="primary"
              type="submit"
              className="btn btn-block btn-primary"
            >
              Modificar
            </Button>
          ) : (
            <Button
              variant="primary"
              type="submit"
              className="btn btn block btn-success"
            >
              Registrarse
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
};

export default PersonaForm;
