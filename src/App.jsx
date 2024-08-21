import "./App.css";
import "./assets/styles/GlobalStyles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {


  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
