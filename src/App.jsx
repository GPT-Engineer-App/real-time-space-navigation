import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UniverseSimulation from "./pages/UniverseSimulation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/universe" element={<UniverseSimulation />} />
      </Routes>
    </Router>
  );
}

export default App;
