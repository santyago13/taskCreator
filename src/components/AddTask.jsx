import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardSystem from "./CardSystem";
import { useEffect, useState } from "react";
import ClassCard from "../ClassCard";
import Swal from "sweetalert2";

const AddTask = () => {
  const tareasLocalStorage = JSON.parse(localStorage.getItem("tareaKey")) || [];
  const [tarea, setTarea] = useState(tareasLocalStorage);
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const crearTarea = (data) => {
    data.preventDefault();
    // crear un nuevo objeto tarea con todos los datos
    const tareaNueva = new ClassCard(nombre, estado, prioridad, descripcion);
    setTarea([...tarea, tareaNueva]);
    // limpiar inputs
    setNombre("");
    setEstado("");
    setDescripcion("");
    setPrioridad("");
    //alerta
    Swal.fire({
      title: "La tarea se creo correctamente",
      icon: "success",
      background: "#001233",
      color: "#ffffff",
      confirmButtonColor: "#023e7d",
    });
  };

  const borrarTarea = (nombreTarea) => {
    Swal.fire({
      title: "¿Estas seguro que quieres borrar la tarea?",
      text: "No puedes deshacer esto!",
      icon: "warning",
      iconColor: "#d33",
      showCancelButton: true,
      background: "#001233",
      color: "#ffffff",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#023e7d",
      confirmButtonText: "Si, borrarlo!",
      cancelButtonText: "No, cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        const tareaFiltrada = tarea.filter(
          (itemTarea) => itemTarea !== nombreTarea
        );
        setTarea(tareaFiltrada);
        Swal.fire({
          background: "#001233",
          color: "#ffffff",
          title: "Tarea borrada",
          text: "Tu tarea se borro del registro",
          icon: "success",
          confirmButtonColor: "#023e7d",
        });
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("tareaKey", JSON.stringify(tarea));
  }, [tarea]);

  return (
    <div className="separador">
      <div className="border p-4 rounded-4 shadow form-tamanio">
        <h1>Añadir Tareas</h1>
        <Form onSubmit={crearTarea}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de la tarea</Form.Label>
            <Form.Control
              minLength={3}
              maxLength={25}
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
              minLength={3}
              maxLength={150}
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
            Agregar
          </Button>
        </Form>
      </div>
      <div className="ms-4">
        <CardSystem propTarea={tarea} borrarTarea={borrarTarea} />
      </div>
    </div>
  );
};

export default AddTask;
