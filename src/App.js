import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css"; // Reset Css
// Components
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/*" element={<h1>Not Found: 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
