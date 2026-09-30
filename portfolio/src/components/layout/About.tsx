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
              I'm into hockey and exercising. I play VALORANT and watch a lot of pro Val and pro
              hockey. I'm also into philosophy, free will and religion mostly, and I like having
              those conversations using the Socratic method.
            </p>
            <p>
              Players on my team felt bad spamming their relatives with emails and phone numbers,
              and the platform we used took 10 to 20 percent of every donation. So I built ours
              instead. The money goes straight to the team's Stripe account, and nobody has to
              feel weird about asking.
            </p>
            <p>
              I got a lot of help on the SAT from teachers and mentors, and later I ran a tutoring
              channel of my own. What students asked most was never how to solve a problem, it was
              what to study next, so I built SAT StudyPath to answer that.
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