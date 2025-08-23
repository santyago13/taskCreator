import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardItem from "./CardItem";

const CardSystem = () => {
  return (
    <>
      <h2 className="card-pad">Administrador de tareas</h2>
      <Container>
        <Row className="row-gap-3">
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
        </Row>
      </Container>
    </>
  );
};

export default CardSystem;
