// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// We'll add more components here as we create them

function App() {
  return (
    <div className="App font-sans bg-gray-50"> {/* Using font-sans for default or you can customize */}
      <Navbar />
      <main>
        <Hero />
        {/* Other sections like TopDestinations will go here */}
      </main>
    </div>
  );
}

export default App;