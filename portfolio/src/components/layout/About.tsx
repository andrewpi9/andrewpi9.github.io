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
    { name: 'React', level: 'Intermediate', category: 'Frontend' },
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
              I ran an SAT tutoring channel, and students almost never asked me how to solve a problem,
              they asked what to study next. A checklist only tells you what is left, and a lifetime
              accuracy number counts the topic you nailed a month ago the same as the one you did
              yesterday. So I built SAT StudyPath.
            </p>
            <p>
              My parents are from Chengdu and talk about it a lot more than they get to go back, so I'm
              building them an app for it - photos, food, the small things they miss. It is in Swift, and
              @Binding and view hierarchies still take me a few tries. It's the kind of project that
              matters beyond the code itself.
            </p>
            <p>
              I go slow when I'm stuck, I work out on paper what the answer should be instead of changing
              lines to see what happens. SAT StudyPath has 118 tests, 52 on the mastery engine, and I
              worked those out by hand before I trusted the code. When I'm not coding I play hockey for
              UNC or volleyball with friends.
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