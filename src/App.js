import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/*" element={<h1>Not Found: 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
