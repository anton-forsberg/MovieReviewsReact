import React from 'react';
import Reviews from './reviews/Reviews';
import './App.scss';

/**
 * Main application component
 */
function App() {
  return (
    <section className="content">
      <Reviews />
      <a href="https://developer.nytimes.com">
        <img alt="Data provided by The New York Times" src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1539041473000"/>
      </a>
    </section>
  );
}

export default App;
