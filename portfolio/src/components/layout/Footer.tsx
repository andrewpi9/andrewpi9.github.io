import React from 'react';
import Button from '../ui/Button';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-buttons">
            <Button
              variant="outline"
              href="https://github.com"
              target="_blank"
              className="footer-button"
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              href="https://linkedin.com"
              target="_blank"
              className="footer-button"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              href="mailto:your.email@example.com"
              className="footer-button"
            >
              Email
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;