import React from 'react';
import Card from '../ui/Card';
import type { Skill } from '../../types';
import './About.css';

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 'Intermediate', category: 'Languages' },
    { name: 'TypeScript', level: 'Intermediate', category: 'Languages' },
    { name: 'Swift', level: 'Intermediate', category: 'Languages' },
    { name: 'FastAPI', level: 'Intermediate', category: 'Backend' },
    { name: 'SQLAlchemy', level: 'Intermediate', category: 'Backend' },
    { name: 'PostgreSQL', level: 'Beginner', category: 'Backend' },
    { name: 'GraphQL', level: 'Intermediate', category: 'Backend' },
    { name: 'React', level: 'Intermediate', category: 'Frontend' },
    { name: 'Next.js', level: 'Intermediate', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 'Beginner', category: 'Frontend' },
    { name: 'Git', level: 'Intermediate', category: 'Tools' },
    { name: 'pytest', level: 'Intermediate', category: 'Tools' },
  ];

  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I play defense for UNC club hockey. It's a club, so UNC doesn't fund it and we pay
              for our own season - dues are $2,500, or $3,250 if you're new. Players felt bad spamming
              their relatives to cover that, so I built our own fundraising site instead. Nobody
              feels bad for receiving donations now.
            </p>
            <p>
              I got a lot of help on the SAT from teachers and mentors, and later I ran a tutoring
              channel of my own. What students asked most was never how to solve a problem, it was
              what to study next, so I built SAT StudyPath to answer that. I was in their position
              not long ago and wanted to do the same thing back.
            </p>
          </div>

          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-categories">
              {skillCategories.map(category => (
                <div key={category} className="skills-category">
                  <h4>{category}</h4>
                  <div className="skills-grid">
                    {skills
                      .filter(skill => skill.category === category)
                      .map(skill => (
                        <Card key={skill.name} className="skill-card" hover>
                          <div className="skill-content">
                            <span className="skill-name">{skill.name}</span>
                            <span className={`skill-level skill-level--${skill.level.toLowerCase()}`}>
                              {skill.level}
                            </span>
                          </div>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;