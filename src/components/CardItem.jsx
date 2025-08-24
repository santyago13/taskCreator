import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const CardItem = ({ propTarea }) => {
  const colorPrioridad = () => {
    switch (propTarea.prioridad) {
      case "Baja":
        return "prioridad-baja";
      case "Media":
        return "prioridad-media";
      case "Alta":
        return "prioridad-alta";
      default:
        return "";
    }
  };

  return (
    <Col>
      <Card className="h-100 card-item">
        <Card.Header className="d-flex justify-content-between bg-azul-claro">
          <div>
            <Card.Title>{propTarea.nombre}</Card.Title>
          </div>
        </Card.Header>
        <Card.Body className="bg-azul">
          <Card.Text>{propTarea.descripcion}</Card.Text>
          <Card.Text>
            Prioridad:{" "}
            <span className={colorPrioridad()}>{propTarea.prioridad}</span>
          </Card.Text>
          <Form.Select className="bg-azul-claro">
            <option className="fw-bold bg-dark">{propTarea.estado}</option>
            <option value="">Creada</option>
            <option value="">En proceso</option>
            <option value="">Terminada</option>
          </Form.Select>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between text-creation text-muted text-center bg-azul-claro">
          <div className="d-flex">
            <Button className="mx-2 btn-azul">Editar</Button>
            <Button className="mx-2 btn-azul">Borrar</Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardItem;
