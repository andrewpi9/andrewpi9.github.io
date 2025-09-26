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
              I'm passionate about creating digital experiences that solve real-world problems.
              Currently learning modern web technologies and building projects that showcase
              my growing skills in React, TypeScript, and beyond.
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
                src="/portfolio/images/headshot.JPG"
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