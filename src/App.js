import { Route, Routes } from "react-router-dom";
import CaratCalculator from "./pages/CaratCalculator/CaratCalculator";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Alloys from "./pages/Alloys/Alloys";
import Solders from "./pages/Solders/Solders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CaratCalculator />} />
          <Route path="alloys" element={<Alloys />} />
          <Route path="solders" element={<Solders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
