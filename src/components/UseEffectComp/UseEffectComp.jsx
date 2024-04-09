import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
const UseEffectComp = () => {
    // Consumir API de Yu-Gi-Oh
    const [nameCard, setNameCard] = useState("Dark Magician");
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        setLoading(true);
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(nameCard)}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setCards(data.data);
                setSearch(prevSearch => {
                    const newSearch = [...prevSearch, nameCard];
                    localStorage.setItem("search", JSON.stringify(newSearch));
                    return newSearch;
                });
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };
    

    useEffect(() => {
        handleSearch();
    }, []); // Esta llamada se realizará solo una vez al montar el componente

    if (loading) return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
    if(error) console.log(error);


    return (
        <div className="">
            <Card className="m-3 bg-light">
                <Card.Header>
                    <h6 className="text-center">Buscar cartas de yugioh consumiendo API YGO PRO DECK</h6>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <input
                            className="form-control"
                            type="text"
                            value={nameCard}
                            onChange={(e) => {
                                const { value } = e.target;
                                setNameCard(value);
                                setSearch(value);
                              }}
                              
                        />
                        <Button className="mt-2" onClick={handleSearch}>Buscar</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="m-3 bg-light">
                <Card.Header>
                    <h6 className="text-center">Resultado de la búsqueda</h6>
                </Card.Header>
                <Card.Body>
                <ul className="list-unstyled">
                {cards.length > 0 && cards !== "Network response was not ok" ? (
                    cards.map((card) => (
                        <li key={card.id}>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-3">
                                    <img src={card.card_images[0].image_url} alt={card.name} width={250} />
                                </div>
                                <div className="col-4">
                                    <h5>{card.name}</h5>
                                    <p>Nivel: {card.level || "--"}</p>
                                    <p>Ataque: {card.atk || "--"}</p>
                                    <p>Defensa: {card.def || "--"}</p>
                                    <p>Descripción: {card.desc}</p>
                                    <p>Tipo: {card.type}</p>
                                    <p>Rareza: {card.card_prices[0].cardmarket_price}</p>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No cards found</li>
                )}
            </ul>
                </Card.Body>
            </Card> 
        </div>
    );
};

export default UseEffectComp;
