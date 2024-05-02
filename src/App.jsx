import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./Components/UserREgistrations/Login";
import Signup from "./Components/UserREgistrations/Signup";
import Dashboard from "./Components/Dashboards/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
