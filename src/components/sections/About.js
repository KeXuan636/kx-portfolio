import { Icon } from '@iconify/react';

export default function About() {
  const skills = [
    {
      icon: "flowbite:code-outline",
      title: "Development",
      color: "#e943a2",
      description:
        "Building responsive and performant web applications with modern technologies",
    },
    {
      icon: "mdi:palette",
      title: "Design",
      color: "#e943a2",
      description:
        "Creating beautiful, user-friendly interfaces that delight and inspire",
    },
    {
      icon: "mdi:star-outline",
      title: "Innovation",
      color: "#e943a2",
      description:
        "Always exploring new ideas and pushing the boundaries of what's possible",
    },
  ];

  return (
    <section id="about" className="section-container">
      <h2>About Me</h2>
      <p>
        I’m a creative professional dedicated to building exceptional digital
        experiences that combine beautiful design with powerful functionality.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
            <div className="card" key={index}>
            <div className="icon-wrapper">
                <Icon icon={skill.icon} width="32" height="32" color={skill.color} />
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            </div>
        ))}
        </div>

      <h3 className="skills-heading">Technical Skills</h3>
      <div className="technical-skills-container">
        {["JavaScript", "Python", "HTML", "CSS", "React", "Node.js", "EJS", "Express.js", "MongoDB", "Git", "REST APIs", "Responsive Design"].map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>

    </section>
  );
}
