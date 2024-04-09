import React, { useContext } from "react";
import YugiohContext from "../context/YugiohContext.jsx"; // Asegúrate de importar correctamente el contexto

const UseStateComp = () => {
    const { search, setSearch } = useContext(YugiohContext);

    console.log(YugiohContext);
    return (
        <div className="container">
            <h1>useState</h1>
            <h2>Search: {search}</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default UseStateComp;
