import React from 'react';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';
import Projects from '../components/layout/Projects';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;