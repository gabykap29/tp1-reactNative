import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UseStateComp from "./components/UseState/UseStateComp";
import UseEffectComp from "./components/UseEffectComp/UseEffectComp";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { YugiohContextProvider } from "./components/context/YugiohContext";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <YugiohContextProvider>
        <Routes>
          <Route path="/use-effect" exact element={<UseStateComp />} />
          <Route path="/" element={<UseEffectComp />} />
        </Routes>
      </YugiohContextProvider>
    </Router>
  );
};

export default App;
