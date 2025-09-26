import React from 'react';
import Card from '../ui/Card';
import type { Skill } from '../../types';
import './About.css';

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Swift', level: 'Intermediate', category: 'Languages' },
    { name: 'Python', level: 'Intermediate', category: 'Languages' },
    { name: 'React', level: 'Beginner', category: 'Frontend' },
    { name: 'TypeScript', level: 'Beginner', category: 'Languages' },
  ];

  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate beginner programmer with a love for creating digital solutions
              that make a difference. My journey into web development started with curiosity
              about how websites work, and has grown into a dedicated pursuit of mastering
              modern technologies.
            </p>
            <p>
              I believe in writing clean, maintainable code and continuously learning new
              technologies. When I'm not coding, you can find me exploring new frameworks,
              contributing to open source projects, or planning my next coding project.
            </p>
            <p>
              I'm excited to bring my fresh perspective and enthusiasm to collaborative
              projects and am always eager to learn from experienced developers.
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