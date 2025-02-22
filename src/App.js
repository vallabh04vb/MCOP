import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar';
import Stats from './pages/About/Stats';
import FoundersAddress from './pages/About/FoundersAddress';
import Footer from './components/common/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import Luminaries from './pages/About/Luminaries';
import Spotlight from './pages/About/Spotlight';
import Calendar from './pages/Calendar/Calendar';
import Training from './pages/Resources/Training';
import SopRop from './pages/Resources/SopRop';
import StartChapter from './pages/Partner/StartChapter';
import News from './pages/Updates/News';
import Announcements from './pages/Updates/Announcements';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <ScrollProgress />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/stats" element={<Stats />} />
            <Route path="/about/founders-address" element={<FoundersAddress />} />
            <Route path="/about/luminaries" element={<Luminaries />} />
            <Route path="/about/spotlight" element={<Spotlight />} />
            <Route path="/calendar/*" element={<Calendar />} />
            <Route path="/resources/training" element={<Training />} />
            <Route path="/resources/sop-rop" element={<SopRop />} />
            <Route path="/partner/start-chapter" element={<StartChapter />} />
            <Route path="/updates/news" element={<News />} />
            <Route path="/updates/announcements" element={<Announcements />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;