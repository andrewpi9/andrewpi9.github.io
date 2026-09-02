import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import type { Project } from '../../types';
import './Projects.css';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '0',
      title: 'SAT StudyPath',
      description: 'Ranks all 35 SAT skills by how many points a weak one is costing you, weighted by how often that topic shows up on the test. Scores fade the longer you go without practicing, so review climbs the list without me scheduling it.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'pytest'],
      liveUrl: 'https://andrewpi9.github.io/SAT-StudyPath/',
      githubUrl: 'https://github.com/andrewpi9/SAT-StudyPath',
    },
    {
      id: '1',
      title: 'Wordle Game',
      description: 'A Wordle clone in plain JavaScript, no framework and no build step. The annoying part was a guess with a repeated letter, where the second one only goes yellow if the answer really has two.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
      liveUrl: 'https://andrewpi9.github.io/wordle/',
      githubUrl: 'https://github.com/andrewpi9/andrewpi9.github.io/tree/main/wordle',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Two things I've built, and the parts that were actually hard
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