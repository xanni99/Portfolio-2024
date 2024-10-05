import { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const MyProjects = () => {
    const projects = [
        {
          id: 1,
          title: "Agent Statistics Dashboard",
          image: "./service.png",
          techStack: ["Javascript", "HTML", "CSS"],
          description: "This is a portfolio website built using React to showcase personal projects and skills.",
          longDescription: "This project is a full portfolio website built with React. It has a responsive design, a custom contact form, and showcases various projects I've worked on, including detailed descriptions and images of each project.",
        },
        {
          id: 2,
          title: "Full Stack Website",
          image: "./full-stack-app.png",
          techStack: ["MongoDB", "Express", "React", "NodeJs"],
          description: "This is a portfolio website built using React to showcase personal projects and skills.",
          longDescription: "This project is a full portfolio website built with React. It has a responsive design, a custom contact form, and showcases various projects I've worked on, including detailed descriptions and images of each project.",
          link : "https://github.com/xanni99/T3A2-Full-Stack-App--GC-Activity-Rental-Website"
        },
        {
          id: 3,
          title: "Friend Library API",
          image: "./friend-library.png",
          techStack: ["Flask", "PostgreSQL", "SQLAlchemy", "Marshmallow"],
          description: "An e-commerce store with user authentication and a shopping cart.",
          longDescription: "This e-commerce store allows users to browse products, add them to a shopping cart, and complete purchases using a secure payment gateway. Features include user authentication, product filtering, and order management.",
          link : "https://github.com/xanni99/Friend-Library"
        },
        {
          id: 4,
          title: "Baking Simulator Terminal App",
          image: "./baking-sim.png",
          techStack: ["Python"],
          description: "A task management application to track daily tasks with real-time updates.",
          longDescription: "This task management app provides real-time updates using Firebase. Users can create tasks, set deadlines, and mark tasks as completed. The app features a clean and user-friendly interface with notifications for overdue tasks.",
          link : "https://github.com/xanni99/Baking-Simulation--T1A3-Terminal-Application"
        },
        {
          id: 5,
          title: "Static Portfolio",
          image: "./static-site.png",
          techStack: ["HTML", "CSS"],
          description: "A social media dashboard for tracking analytics and user engagement.",
          longDescription: "This dashboard visualizes user engagement statistics for various social media platforms. Built with Angular and Chart.js, it allows users to filter data by platform, date range, and engagement type. It provides insights through graphs and charts.",
          link : "https://github.com/xanni99/T1A2_Portfolio"
        }
    ];

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Container fluid id="my-projects" className="my-projects-container">
      {/* Centered Title */}
      <h1 id="projects-title" className="projects-title text-center">MY PROJECTS</h1>

      {/* Carousel for Project Cards */}
      <Slider {...settings} id="project-slider">
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <Card className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Stack</Card.Subtitle>
                <ul>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <Card.Text>
                  {expandedProject === project.id ? project.longDescription : project.description}
                </Card.Text>
                <div className='card-buttons'>
                    <Button variant="primary" onClick={() => toggleReadMore(project.id)}>
                    {expandedProject === project.id ? "Read Less" : "Read More"}
                    </Button>
                    {project.link && (
                    <Button variant="light" href={project.link} className="github-buttons">
                      <FontAwesomeIcon icon={faGithub} size="2x" /> View this Project Repo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

// Custom Arrows for Next/Previous navigation
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000" }}
      onClick={onClick}
    />
  );
}

export default MyProjects;
