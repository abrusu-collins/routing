import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import Footer from "./pages/Footer";

function App() {


  return <Router>
    <Navbar/>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    <Footer/>
  </Router>
}

export default App;
