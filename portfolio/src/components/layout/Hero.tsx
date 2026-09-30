import React from 'react';
import Button from '../ui/Button';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="hero-name">Andrew Pi</span>
            </h1>
            <p className="hero-subtitle">
              CS and Econ at UNC
            </p>
            <p className="hero-description">
              Most of what I build is me trying to give back to something that helped me first.
              Teachers and mentors got me through the SAT, and club hockey has given me a lot,
              so those are the two things I keep building for.
            </p>

            <div className="hero-actions">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </Button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar">
              <img
                src="/images/headshot.JPG"
                alt="Andrew Pi"
                className="avatar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;