import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/detail";
import Home from "./routes/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="/movie" element={<h1>Movie</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
