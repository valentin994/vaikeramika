import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-screen bg-lightbg text-textcol font-sans dark:bg-textcol">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
