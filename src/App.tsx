import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <UseCases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
