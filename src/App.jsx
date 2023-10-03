import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-screen bg-lightbg text-textcol font-sans dark:bg-textcol">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
