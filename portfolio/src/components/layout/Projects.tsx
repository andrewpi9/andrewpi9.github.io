import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import type { Project } from '../../types';
import './Projects.css';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, mobile-first design, and optimized performance.',
      technologies: ['React', 'TypeScript', 'CSS3', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: '2',
      title: 'Todo App',
      description: 'A feature-rich todo application with local storage, drag-and-drop functionality, and dark mode. Perfect for daily task management.',
      technologies: ['React', 'JavaScript', 'Local Storage', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A clean weather application that displays current conditions and forecasts. Integrates with external weather API for real-time data.',
      technologies: ['React', 'API Integration', 'Chart.js', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some projects I've been working on to showcase my growing skills
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <Card key={project.id} className="project-card" hover>
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.liveUrl}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.githubUrl}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <Button
            variant="primary"
            size="lg"
            href="https://github.com/andrewpi9"
            target="_blank"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;