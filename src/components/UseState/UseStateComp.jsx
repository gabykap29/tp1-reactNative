import React, { useContext } from "react";
import YugiohContext from "../context/YugiohContext.jsx"; // Asegúrate de importar correctamente el contexto
import Alert from "react-bootstrap/Alert"; // Importa el componente de alerta de Bootstrap
import Card from "react-bootstrap/Card"; // Importa el componente de tarjeta de Bootstrap
const UseStateComp = () => {
    const { search } = useContext(YugiohContext);

    //boton eliminar
    const handleDelete = (index) => {
        search.splice(index, 1);
    };

    return (
        <div className="container">
            
            {search.length > 0 && ( // Muestra las alertas solo si hay búsquedas
                <Card>
                    <Card.Header>
                        Ultimas búsqueda...
                    </Card.Header>
                    <Card.Body>
                    {
                        search.length > 0 ? (
                            search.map((item, index) => (
                                item.length > 1 ? (
                                    <Alert key={index} variant="warning">
                                    <p>{item}</p>
                                </Alert>
                                ): null
                            ))
                        ): (
                            <Alert variant="warning">
                                <p>No hay búsquedas</p>
                            </Alert>
                        )
                    }
                    </Card.Body>
                    
                </Card>
            )}
        </div>
    );
};

export default UseStateComp;
