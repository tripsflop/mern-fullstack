import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/holiday" element={<p>Holiday</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
