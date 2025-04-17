import "./App.css";
import "./assets/styles/GlobalStyles.scss";
import Home from "./pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useEffect, useState } from "react";
import AdminPanel from "./modules/Admin/AdminPanel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./modules/Admin/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isLoggedIn = sessionStorage.getItem("isAdmin");
    console.log('isLoggedIn', isLoggedIn);
    console.log('isLoggedIn comp', isLoggedIn === 'true');
    
    if (isLoggedIn == 'true') {
      setUser(isLoggedIn);
    }else{
      setUser(false);
    }
    // return isLoggedIn; // Cleanup the listener on unmount
  }, []);
  
console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Protecting the admin route based on user authentication */}
        <Route
          path="/admin"
          element={
            user ? <AdminPanel /> : <Navigate to="/login" /> // Redirect to login if not authenticated
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
