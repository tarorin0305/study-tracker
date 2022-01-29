import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import English from "./components/English";
import Expenses from "./components/Expenses";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/english" element={<English />}/>
        <Route path="/expenses" element={<Expenses />}/>
      </Routes>
    </>
  );
}

export default App;
