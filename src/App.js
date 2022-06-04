import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvide } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



function App() {
  return (
    <>
    <AuthContextProvide>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </AuthContextProvide>
      
      
    </>
  );
}

export default App;
