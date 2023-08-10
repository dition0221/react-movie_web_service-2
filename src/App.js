import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css"; // Reset Css
// Routes
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// Components
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/*" element={<h1>Not Found: 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
