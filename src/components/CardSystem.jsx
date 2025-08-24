import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardItem from "./CardItem";

const CardSystem = ({ propTarea, borrarTarea }) => {
  // hacer que si no hay ninguna tarea mostrar un mensaje
  if (propTarea.length === 0) {
    return (
      <Container>
        <p className="text-center fs-4 my-3">No hay tareas disponibles.</p>
      </Container>
    );
  }
  return (
    <>
      <h2 className="card-pad">Administrador de tareas</h2>
      <Container>
        <Row className="row-gap-3">
          {propTarea.map((tarea, indice) => (
            <CardItem
              key={indice}
              propTarea={tarea}
              borrarTarea={borrarTarea}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardSystem;
