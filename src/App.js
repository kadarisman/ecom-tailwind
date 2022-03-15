import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:productName" element={<Detail/>}/>
    </Routes>
  );
}

export default App;
