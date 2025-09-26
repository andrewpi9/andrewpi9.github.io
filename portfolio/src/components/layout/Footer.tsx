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
              href="https://github.com/andrewpi9"
              target="_blank"
              className="footer-button"
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              href="https://www.linkedin.com/in/andrewpi/"
              target="_blank"
              className="footer-button"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              href="mailto:andrewpi@unc.edu"
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