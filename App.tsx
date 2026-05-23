import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { SEOPage } from './pages/SEOPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-industrial-950 font-sans text-gray-200">
        <Navigation />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/lithium-ion-battery-recycling" element={<SEOPage slug="lithium-ion-battery-recycling" />} />
            <Route path="/second-life-batteries" element={<SEOPage slug="second-life-batteries" />} />
            <Route path="/battery-energy-storage-system" element={<SEOPage slug="battery-energy-storage-system" />} />
            <Route path="/ev-battery-recycling-india" element={<SEOPage slug="ev-battery-recycling-india" />} />
            <Route path="/battery-repurposing" element={<SEOPage slug="battery-repurposing" />} />
            <Route path="/ai-battery-diagnostics" element={<SEOPage slug="ai-battery-diagnostics" />} />
            <Route path="/battery-circular-economy" element={<SEOPage slug="battery-circular-economy" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
