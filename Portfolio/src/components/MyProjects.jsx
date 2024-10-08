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
          description: "Built an agent statistics dashboard to display key KPIs and track goals.",
          longDescription: "Developed an interactive dashboard that enables sales agents to visualise key performance metrics such as revenue, talk time, and leads over customisable time frames. The dashboard features advanced calculation functions for enhanced data insights, along with a target tracker that allows users to set three target goals and calculate necessary KPIs based on previous month performance data. Utilised dynamic data visualisation techniques to effectively present trends and statistics while ensuring seamless integration of backend data with the frontend interface.",
        },
        {
          id: 2,
          title: "Full Stack Website",
          image: "./full-stack.png",
          techStack: ["MongoDB", "Express", "React", "NodeJs"],
          description: "Created a full-stack 'Rental Activity' booking website as a group for a hypothetical client.",
          longDescription: "Created a full-stack web application for activity rentals, featuring a user-friendly interface for browsing and booking activities. The site allows users to register, log in, and manage their bookings seamlessly. Integrated robust back-end functionalities for data management and retrieval, ensuring efficient processing of user requests. Employed modern technologies for a responsive design and implemented features such as user authentication and a secure payment system, enhancing the overall user experience and functionality of the platform.",
          link : "https://github.com/xanni99/T3A2-Full-Stack-App--GC-Activity-Rental-Website"
        },
        {
          id: 3,
          title: "Friend Library API",
          image: "./api.png",
          techStack: ["Flask", "PostgreSQL", "SQLAlchemy", "Marshmallow"],
          description: "Created a 'friend library' API that acts as a library for your friend group's books.",
          longDescription: "Developed a collaborative platform that allows users to create and manage a shared library of books. Users can add, remove, and search for books while tracking their reading progress. The application features a user-friendly interface and integrates a robust back-end to manage user data and book information effectively. Key functionalities include user authentication, book reviews, and rating systems, fostering a community-driven environment for book enthusiasts to connect and share recommendations.",
          link : "https://github.com/xanni99/Friend-Library"
        },
        {
          id: 4,
          title: "Baking Simulator Terminal App",
          image: "./python.png",
          techStack: ["Python"],
          description: "Created a 'Baking Simulation' terminal app using Python.",
          longDescription: "Developed a terminal-based application that simulates the operation of a baking machine, allowing users to manage the entire baking process. Users can add ingredients, select recipes, and perform machine maintenance tasks such as cleaning. The app guides users through the baking process, providing options to bake a variety of treats. This project showcases the integration of user inputs with functional programming, highlighting my skills in creating interactive applications.",
          link : "https://github.com/xanni99/Baking-Simulation--T1A3-Terminal-Application"
        },
        {
          id: 5,
          title: "Static Portfolio",
          image: "./static-portfolio.png",
          techStack: ["HTML", "CSS"],
          description: "A static portfolio utilising HTML and CSS (my first ever project).",
          longDescription: "This was my first ever 'coding' project for my diploma of IT. It involved creating a responsive web portfolio using static HTML and CSS. Although it is not my best work, I have left it in to showcase just how much I have improved since I started!",
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
                    <Button id="read-more-button" onClick={() => toggleReadMore(project.id)}>
                    {expandedProject === project.id ? "Read Less" : "Read More"}
                    </Button>
                    {project.link && (
                    <Button id="github-button" href={project.link} target="blank" className="github-buttons">
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
