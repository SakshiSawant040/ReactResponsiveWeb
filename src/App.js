import "./style.css"
import "./Navbar/Navbar.css"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Navbar/Home"
import About from "./Navbar/About"
import Services from "./Navbar/Services"
import Contact from "./Navbar/Contact"
import NotFound from "./Navbar/NotFound"
import Footer from "./Navbar/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  Component={Home}/>
          <Route path="/About" Component={About} />
          <Route path="/Services" Component={Services} />
          <Route path="/Contact" Component={Contact}/>
          <Route path="*" Component={NotFound}/>
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
