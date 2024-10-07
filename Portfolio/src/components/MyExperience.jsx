import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MyExperience = () => {
  // Combined data for education and work experience
  const experiences = [
    {
      year: "2024",
      title: "Web Development Internship",
      institution: "Service.com",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
    },
    {
      year: "2024",
      title: "Diploma of Information Technology",
      institution: "Coder Academy",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
    },
    {
      year: "2021 - 2022",
      title: "Exercise Physiologist",
      institution: "Club Active",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
    },
    {
      year: "2020-2022",
      title: "Sports Camp Leader & Strength and Conditioning Coach",
      institution: "Somerset College",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
    },
    {
      year: "2017-2021",
      title: "Bachelor of Clinical Exercise Physiology",
      institution: "Griffith University",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
    },
    {
      year: "2019-2020",
      title: "Physiotherapist Receptionist",
      institution: "City Coast Physio",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
    },
    {
      year: "2018-2024",
      title: "Customer Experience Agent",
      institution: "Yourtown",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
    },
    {
      year: "2013-2018",
      title: "Pharmacy Assistant",
      institution: "Cabarita Pharmacy",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
    },
    {
        year: "2004-2016",
        title: "Education",
        institution: "Somerset College",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam error fugit, reprehenderit repellendus, qui maxime eaque amet quibusdam ipsa placeat deserunt voluptatem repudiandae consectetur dolorem ullam quidem dolor quam dolorum!",
      },
  ];

  // State to manage visibility of additional experiences
  const [showMore, setShowMore] = useState(false);

  return (
    <Container fluid id="my-experience" className="my-experience-container">
      {/* Centered Title */}
      <Row className="justify-content-center text-center mb-5">
        <Col>
          <h1 className="experience-title">EDUCATION AND EXPERIENCE</h1>
        </Col>
      </Row>

      {/* Experience List */}
      <Row className="justify-content-center experience-content">
        {experiences.slice(0, showMore ? experiences.length : 3).map((exp, index) => (
          <Row key={index} className="experience-row align-items-center mb-4" style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <Col md={6} className="text-right">
              <h3 className="experience-year">{exp.year}</h3>
            </Col>
            <Col md={6}>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-institution">{exp.institution}</p>
              <p className="experience-description">{exp.description}</p>
            </Col>
          </Row>
        ))}
      </Row>

      {/* See More Button */}
      {experiences.length > 3 && (
        <Row className="justify-content-center mb-5">
          <Col className="text-center">
            <Button id="full-history-button" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'My Full History'}
            </Button>
            <Button id="my-projects-button" href="#my-projects" variant="outline-dark" size="m">
              My Projects
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MyExperience;