import "./App.css";
import { BrowerRouter as Router, Routes, Route } from "react-router-dom"
import { navbar } from "./components/navbar";
function App() {
  return (
  <div classname="App">
      <Router>
      <Navbar />
    <Routes>
      <Route path="/" />
      <Route path="/cart" />
     </Routes>
    </Router>
  </div>
  );
}


export default App;
