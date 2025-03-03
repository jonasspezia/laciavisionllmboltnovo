import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApiKeyProvider } from './context/ApiKeyContext';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <ApiKeyProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/upload" element={<AnalysisPage />} />
            </Routes>
          </main>
          <footer className="bg-white py-6 border-t border-gray-200">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
              <p>Video Insight AI &copy; {new Date().getFullYear()} - Powered by Google Gemini 1.5</p>
            </div>
          </footer>
        </div>
      </Router>
    </ApiKeyProvider>
  );
}

export default App;
