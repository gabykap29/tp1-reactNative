import { useContext } from "react";

import YugiohContext from "../context/YugiohContext";

const useYugioh = () => {
    return useContext(YugiohContext);

};

export default useYugioh;