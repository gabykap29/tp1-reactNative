import{ useContext } from "react";
import YugiohContext from "../context/YugiohContext.jsx";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

const UseStateComp = () => {
  const { search } = useContext(YugiohContext);

  return (
    <div className="container mt-4">
      {search.length > 0 && (
        <Card className="bg-light shadow-sm">
          <Card.Header >
            Últimas búsquedas
          </Card.Header>
          <Card.Body>
            {search.length > 0 ? (
              search.map((item, index) =>
                item.length > 1 ? (
                  <Alert key={index} variant="warning">
                    <p>{item}</p>
                  </Alert>
                ) : null
              )
            ) : (
              <Alert variant="warning">
                <p>No hay búsquedas</p>
              </Alert>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UseStateComp;
