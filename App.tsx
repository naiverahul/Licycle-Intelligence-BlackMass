import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Challenge } from './pages/Challenge';
import { Technology } from './pages/Technology';
import { Vision } from './pages/Vision';
import { Contact } from './pages/Contact';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'challenge': return <Challenge />;
      case 'technology': return <Technology />;
      case 'vision': return <Vision />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-industrial-950 font-sans text-gray-200 selection:bg-neon-500 selection:text-black">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setCurrentPage} />
    </div>
  );
}

export default App;
