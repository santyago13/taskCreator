import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardSystem from "./CardSystem";

const AddTask = () => {
  return (
    <div className="separador">
      <div className="border p-4 rounded-4 shadow form-tamanio">
        <h1>Añadir Tareas</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de la tarea</Form.Label>
            <Form.Control
              className="bg-azul-claro"
              required
              type="text"
              placeholder="Ingresa un nombre de tarea"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Estado de la tarea</Form.Label>
            <Form.Select className="bg-azul-claro">
              <option value="">Creada</option>
              <option value="">En proceso</option>
              <option value="">Terminada</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Prioridad de la tarea</Form.Label>
            <Form.Select className="bg-azul-claro">
              <option value="">Baja</option>
              <option value="">Media</option>
              <option value="">Alta</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion de la tarea</Form.Label>
            <Form.Control
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
          <Button
            className="w-100 btn-azul"
            type="submit"
          >
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
