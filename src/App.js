import './index.css'
import Navbar from "./components/Navbar/navbar.js";
import Sliding from './components/Sliding/sliding.js';
import Action from './components/collections/Action.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardDetails from './components/CardDetails.js';

function App() {
  return (
    <Router> {/* Move the top-level Router here */}
      <div className="relative">
        <Navbar />
        <Sliding />
        
        <Routes>
        <Route path="/" element={<Action />} />
        <Route path="card/:id" element={<CardDetails />} />
        
      </Routes>
      </div>
    </Router>
  );
}

export default App;
