import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar';
import Spotlight from './pages/Spotlight/Spotlight';
import Events from './pages/Events/Events';
import Training from './pages/MCOPHub/Training';
import SopRop from './pages/MCOPHub/SopRop';
import StartChapter from './pages/Partner/StartChapter';
import News from './pages/Updates/News';
import Announcements from './pages/Updates/Announcements';
import Footer from './components/common/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <ScrollProgress />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spotlight" element={<Spotlight />} />
            <Route path="/events/*" element={<Events />} />
            <Route path="/partner/start-chapter" element={<StartChapter />} />
            <Route path="/updates/news" element={<News />} />
            <Route path="/updates/announcements" element={<Announcements />} />
            <Route path="/mcop-hub/sop-rop" element={<SopRop />} />
            <Route path="/mcop-hub/training" element={<Training />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;