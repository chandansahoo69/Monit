import "./App.css";
import Employe from "./Pages/Employe";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<Employe />} />
      </Routes>
    </>
  );
}

export default App;
