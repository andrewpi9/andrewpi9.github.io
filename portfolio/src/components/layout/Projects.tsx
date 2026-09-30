import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import type { Project } from '../../types';
import './Projects.css';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '0',
      title: 'UNC Hockey Fundraiser',
      description: 'Built after our captain felt bad that his grandma was getting skimmed by a platform taking 10 to 20 percent of our donations. Ours takes zero, with a per-player leaderboard so donors can give to someone specific. Over $5,000 raised.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Drizzle'],
      liveUrl: 'https://hockeyfundraising.vercel.app/c/2026-2027-season-fund',
      githubUrl: 'https://github.com/andrewpi9/hockeyfundraising',
    },
    {
      id: '1',
      title: 'Radiant Ranked',
      description: 'RateMyProfessors makes you open a tab per professor to compare them, so I put every professor at UNC and Duke on one page ranked with VALORANT tiers. Everyone knows what Gold means. Nobody knows what 4.3 out of 5 means.',
      technologies: ['Python', 'GraphQL', 'Monte Carlo', 'pytest'],
      liveUrl: 'https://andrewpi9.github.io/radiant-ranked/',
      githubUrl: 'https://github.com/andrewpi9/radiant-ranked',
    },
    {
      id: '2',
      title: 'SAT StudyPath',
      description: 'Ranks all 35 SAT skills by how many points a weak one is costing you, weighted by how often that topic shows up on the test. Scores fade the longer you go without practicing, so review climbs the list without me scheduling it.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'pytest'],
      liveUrl: 'https://andrewpi9.github.io/SAT-StudyPath/',
      githubUrl: 'https://github.com/andrewpi9/SAT-StudyPath',
    },
    {
      id: '3',
      title: 'Wordle Game',
      description: 'A Wordle clone in plain JavaScript, no framework and no build step.',
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
          Some things I've built
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <Card key={project.id} className="project-card" hover>
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