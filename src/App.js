import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css"; // Reset Css
// Routes
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// Components
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/*" element={<Loading text="Not Found: 404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
