import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardSystem from "./CardSystem";
import { useState } from "react";
import ClassCard from "../ClassCard";

const AddTask = () => {
  const [tarea, setTarea] = useState([]);
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const crearTarea = (data) => {
    data.preventDefault();
    // crear un nuevo objeto tarea con todos los datos
    const tareaNueva = new ClassCard(
      nombre,
      estado,
      descripcion,
      prioridad,
    );
    setTarea([...tarea, tareaNueva]);
    console.log(tareaNueva);
    // limpiar inputs
    setNombre("");
    setEstado("");
    setDescripcion("");
    setPrioridad("");
  };

  return (
    <div className="separador">
      <div className="border p-4 rounded-4 shadow form-tamanio">
        <h1>Añadir Tareas</h1>
        <Form onSubmit={crearTarea}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de la tarea</Form.Label>
            <Form.Control
              value={nombre}
              onChange={(data) => setNombre(data.target.value)}
              className="bg-azul-claro"
              required
              type="text"
              placeholder="Ingresa un nombre de tarea"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEstado">
            <Form.Label>Estado de la tarea</Form.Label>
            <Form.Select
              className="bg-azul-claro"
              required
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="">Selecciona un estado</option>
              <option value="Creada">Creada</option>
              <option value="En proceso">En proceso</option>
              <option value="Terminada">Terminada</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrioridad">
            <Form.Label>Prioridad de la tarea</Form.Label>
            <Form.Select
              className="bg-azul-claro"
              required
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
            >
              <option value="">Selecciona una prioridad</option>
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion de la tarea</Form.Label>
            <Form.Control
              value={descripcion}
              onChange={(data) => setDescripcion(data.target.value)}
              className="bg-azul-claro"
              required
              style={{
                resize: "none",
              }}
              type="text"
              as="textarea"
              rows={3}
              placeholder="Ingresa la descripcion de la tarea
              "
            />
          </Form.Group>

          <Button className="w-100 btn-azul" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
      <div className="ms-4">
        <CardSystem />
      </div>
    </div>
  );
};

export default AddTask;
