import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProvenResults from './components/ProvenResults';
import TrackRecord from './components/TrackRecord';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <ProvenResults />
      <TrackRecord />
      <Community />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;