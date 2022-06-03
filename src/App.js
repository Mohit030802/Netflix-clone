import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvide } from "./context/AuthContext";
import Home from "./pages/Home";



function App() {
  return (
    <>
    <AuthContextProvide>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </AuthContextProvide>
      
      
    </>
  );
}

export default App;
