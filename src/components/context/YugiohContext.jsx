import React, { createContext, useState, useEffect } from "react";

const YugiohContext = createContext({
    search: [],
    setSearch: () => {},
});

const YugiohContextProvider = ({ children }) => {
    const [search, setSearch] = useState([]);

    useEffect(() => {
        // Cargar el estado inicial desde localStorage al montar el componente
        const savedSearch = localStorage.getItem("search");
        if (savedSearch) {
            setSearch(JSON.parse(savedSearch));
        }
    }, []);

    const handleSetSearch = (newSearch) => {
        // Actualizar el estado y almacenar en localStorage al cambiar la búsqueda
        const updatedSearch = [...search, newSearch];
        setSearch(updatedSearch);
        localStorage.setItem("search", JSON.stringify(updatedSearch));
    };

    return (
        <YugiohContext.Provider value={{ search, setSearch: handleSetSearch }}>
            {children}
        </YugiohContext.Provider>
    );
};

export  default YugiohContext ;
export { YugiohContextProvider };