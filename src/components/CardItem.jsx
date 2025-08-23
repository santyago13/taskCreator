import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const CardItem = () => {
  return (
    <Col className="col-12 col-md-6">
      <Card className="h-100">
        <Card.Header className="d-flex justify-content-between bg-azul-claro">
          <div>
            <Card.Title>Nombre de la tarea</Card.Title>
          </div>
          <div>
            <Form.Select className="bg-azul-claro">
              <option value="">Creada</option>
              <option value="">En proceso</option>
              <option value="">Terminada</option>
            </Form.Select>
          </div>
        </Card.Header>
        <Card.Body className="bg-azul">
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            accusantium modi, exercitationem autem tempora rem eveniet veniam
            doloremque quibusdam! Molestias vero ea est laboriosam laudantium
            ipsa, nihil inventore aspernatur distinctio natus consequuntur
            perspiciatis eius! Ad mollitia hic odio? Quis sed asperiores dolorem
            culpa voluptas nam alias voluptatem aperiam doloribus eos!
          </Card.Text>
          <Card.Text>
            Prioridad: <span className="prioridad-alta">Alta</span>
          </Card.Text>
          <div className="d-flex justify-content-center pb-3">
            <Button className="mx-2 btn-azul">Editar</Button>
            <Button className="mx-2 btn-azul">Borrar</Button>
          </div>
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
