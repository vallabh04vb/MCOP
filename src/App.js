import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Team from './pages/Team/Team';
import Registration from './pages/Registration/Registration';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-64">
          <ScrollProgress />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
