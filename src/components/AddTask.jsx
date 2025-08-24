import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardSystem from "./CardSystem";
import { useEffect, useState } from "react";
import ClassCard from "../ClassCard";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const tareasLocalStorage = JSON.parse(localStorage.getItem("tareaKey")) || [];
  const [tarea, setTarea] = useState(tareasLocalStorage);

  // Inicializamos React Hook Form
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Función para crear tarea
  const crearTarea = (data) => {
    const tareaNueva = new ClassCard(data.nombre, data.estado, data.prioridad, data.descripcion);
    setTarea([...tarea, tareaNueva]);

    reset(); // limpia el formulario

    Swal.fire({
      title: "La tarea se creó correctamente",
      icon: "success",
      background: "#001233",
      color: "#ffffff",
      confirmButtonColor: "#023e7d",
    });
  };

  // Función para borrar tarea
  const borrarTarea = (nombreTarea) => {
    Swal.fire({
      title: "¿Estás seguro que quieres borrar la tarea?",
      text: "¡No puedes deshacer esto!",
      icon: "warning",
      iconColor: "#d33",
      showCancelButton: true,
      background: "#001233",
      color: "#ffffff",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#023e7d",
      confirmButtonText: "Sí, borrarlo!",
      cancelButtonText: "No, cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        const tareaFiltrada = tarea.filter(itemTarea => itemTarea.nombre !== nombreTarea);
        setTarea(tareaFiltrada);
        Swal.fire({
          background: "#001233",
          color: "#ffffff",
          title: "Tarea borrada",
          text: "Tu tarea se borró del registro",
          icon: "success",
          confirmButtonColor: "#023e7d",
        });
      }
    });
  };

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("tareaKey", JSON.stringify(tarea));
  }, [tarea]);

  return (
    <div className="separador">
      <div className="border p-4 rounded-4 shadow form-tamanio">
        <h1>Añadir Tareas</h1>
        <Form onSubmit={handleSubmit(crearTarea)}>
          {/* Nombre */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre de la tarea</Form.Label>
            <Form.Control
              {...register("nombre", { required: true, minLength: 3, maxLength: 20 })}
              className="bg-azul-claro"
              type="text"
              placeholder="Ingresa un nombre de tarea"
            />
            {errors.nombre && <span className="text-danger">Nombre obligatorio (3-20 caracteres)</span>}
          </Form.Group>

          {/* Estado */}
          <Form.Group className="mb-3">
            <Form.Label>Estado de la tarea</Form.Label>
            <Form.Select
              {...register("estado", { required: true })}
              className="bg-azul-claro"
            >
              <option value="">Selecciona un estado</option>
              <option value="Creada">Creada</option>
              <option value="En proceso">En proceso</option>
              <option value="Terminada">Terminada</option>
            </Form.Select>
            {errors.estado && <span className="text-danger">Estado obligatorio</span>}
          </Form.Group>

          {/* Prioridad */}
          <Form.Group className="mb-3">
            <Form.Label>Prioridad de la tarea</Form.Label>
            <Form.Select
              {...register("prioridad", { required: true })}
              className="bg-azul-claro"
            >
              <option value="">Selecciona una prioridad</option>
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </Form.Select>
            {errors.prioridad && <span className="text-danger">Prioridad obligatoria</span>}
          </Form.Group>

          {/* Descripción */}
          <Form.Group className="mb-3">
            <Form.Label>Descripción de la tarea</Form.Label>
            <Form.Control
              {...register("descripcion", { required: true, minLength: 3, maxLength: 100 })}
              className="bg-azul-claro"
              as="textarea"
              rows={3}
              placeholder="Ingresa la descripción de la tarea"
              style={{ resize: "none" }}
            />
            {errors.descripcion && <span className="text-danger">Descripción obligatoria (3-100 caracteres)</span>}
          </Form.Group>

          <Button className="w-100 btn-azul" type="submit">
            Enviar
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
