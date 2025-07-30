import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerpage from "./Register";
import "./App.css";
import Loginpage from "./Login";
import Welcomepage from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/welcome" element={<Welcomepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
