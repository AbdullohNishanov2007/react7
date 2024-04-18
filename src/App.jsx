import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Mans from './components/Mans/Mans';
import Womens from './components/Womens/Womans'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mans" element={<Mans />} />
          <Route path="/womens" element={<Womens />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



