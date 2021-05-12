import Navbar from "./Pages/Components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      </Router>
    </div>
  );
}

export default App;
