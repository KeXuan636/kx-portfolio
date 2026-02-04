import { useState } from 'react';

export default function Portfolio() {
    const tabs = ["Programming", "VR/AR", "UI/UX"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const projects = [
        {
            title: "Pizza Menu Website",
            description: "A pizza ordering website that allows users to browse the menu.",
            imageUrl: "pizza-app.png",
            tools: "React, CSS, JavaScript",
            link: "https://pizza-five-ruddy.vercel.app/",
            category: "Programming",
        },
        {
            title: "Travel List Website",
            description: "This website allows users to add, delete, search, sort and browse items in the list. User can also track packing progess.",
            imageUrl: "travel-app.png",
            tools: "React, CSS, JavaScript",
            link: "https://travel-app-ten-lilac.vercel.app/",
            category: "Programming",
        },
        {
            title: "Escape Room Game",
            description: "A web-based escape room game with 4 puzzles.",
            imageUrl: "escaperoom.png",
            tools: "Unity",
            link: "VR recording.mp4",
            category: "VR/AR",
        },
        {
            title: "Jio Me Website",
            description: "JioMe is a campus app that helps people quickly find, join, and manage informal interest groups and events.",
            imageUrl: "jiome-app.png",
            tools: "React, CSS, JavaScript",
            link: "https://c219-ca2-jiome-api.vercel.app",
            category: "Programming",
        },
        {
            title: "AR Name Card",
            description: "An augmented reality name card that displays my contact information in an interactive way.",
            imageUrl: "ar-name-card.png",
            tools: "Unity, C#",
            link: "ar-name-card.mp4",
            category: "VR/AR",
        },
        {
            title: "Leaf and Loom E-commerce UI Design",
            description: "A modern UI design for an e-commerce website specializing in eco-friendly products.",
            imageUrl: "leafandloom.png",
            tools: "Figma",
            link: "LeafandLoom.mp4",
            category: "UI/UX",
        },
        {
            title: "Learn@RP UI/UX Design",
            description: "A user-friendly redesign of the Learn@RP platform to enhance student engagement and accessibility.",
            imageUrl: "learnrp.png",
            tools: "Figma",
            link: "Learn@RP.mp4",
            category: "UI/UX",
        }
    ];

    const handleProjectClick = (link) => {
        if (link) window.open(link, "_blank");
    };

    const filtered = projects.filter(p => p.category === activeTab);

    return (
        <section id="portfolio" className="container">
            <h2>Portfolio</h2>
            <p>A selection of projects that showcase my skills and passion for creating exceptional digital products.</p>

            <div className="portfolio-tabs">
                {tabs.map((tab) => (
                    <button
                    key={tab}
                    className={`tab ${tab === activeTab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filtered.map((project, index) => (
                    <div 
                        className="project-card" 
                        key={index}
                        onClick={() => handleProjectClick(project.link)}
                        style={{ cursor: project.link ? 'pointer' : 'default' }}
                    >
                        <img src={project.imageUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tools-container">
                            {project.tools.split(", ").map((tool, toolIndex) => (
                                <span key={toolIndex} className="project-tools">{tool}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
