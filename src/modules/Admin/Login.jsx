import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // set loading
  
    try {
      const docRef = doc(db, "admin", "credentials");
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const savedPassword = docSnap.data().password;
        console.log('savedPassword', savedPassword);
        console.log('password',  password);
        
        if (password === savedPassword) {
          sessionStorage.setItem("isAdmin", true);
          console.log("Login success, redirecting...");
          navigate("/admin");
        } else {
          setError("❌ Incorrect password.");
        }
      } else {
        setError("⚠️ Admin credentials not found.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>🔐 Admin Login</h2>
        {error && (
          <p className="error" aria-live="assertive">
            {error}
          </p>
        )}
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        {loading ? <p>Logging in...</p> : <button type="submit">Login</button>}
        <h3 className="home-link">
          <Link to="/" className="link">
            Home <CiHome className="home-icon" />
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default Login;
