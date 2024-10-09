import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const MyExperience = () => {
  // Data for education/experiences
  const experiences = [
    {
      year: "2024",
      title: "Web Development Internship",
      institution: "Service.com",
      description: "During my 6-week internship at Service.com, I developed an agent statistics dashboard for the call center team. This project involved using Python, JavaScript, Jinja, HTML, and CSS to construct new API calls, create database tables, and write SQL queries to retrieve and display key performance indicators (KPIs). The dashboard enabled agents to track KPIs over selected timeframes and included a target tracker integrated with a Plotly graph, allowing users to calculate KPIs needed to meet revenue goals. This experience greatly enhanced my technical skills and problem-solving abilities."
    },
    {
      year: "2024",
      title: "Diploma of Information Technology",
      institution: "Coder Academy",
      description: "I completed a Diploma of Information Technology at Coder Academy, where I gained hands-on, industry-relevant experience in full-stack web development. This intensive program covered a wide range of topics, including front-end and back-end development, database systems, software engineering, and information systems."
    },
    {
      year: "2021 - 2022",
      title: "Exercise Physiologist",
      institution: "Club Active",
      description: "At Club Active, I provided clinical exercise prescriptions based on evidence-based practices for a range of clients. My responsibilities included conducting thorough fitness assessments and maintaining detailed clinical notes."
    },
    {
      year: "2020-2022",
      title: "Sports Camp Leader & Strength and Conditioning Coach",
      institution: "Somerset College",
      description: "I organized and led various sports and activities for children aged 5-12 and worked with high school students in small groups within a gym setting."
    },
    {
      year: "2017-2021",
      title: "Bachelor of Clinical Exercise Physiology",
      institution: "Griffith University",
      description: "I graduated with a Bachelor of Clinical Exercise Physiology, where I gained in-depth knowledge of exercise science and rehabilitation practices."
    },
    {
      year: "2019-2020",
      title: "Physiotherapist Receptionist",
      institution: "City Coast Physio",
      description: "I managed client bookings, processed payments, and provided clerical support."
    },
    {
      year: "2018-2024",
      title: "Customer Experience Agent",
      institution: "Yourtown",
      description: "I manage customer enquiries and maintain customer accounts, oversee general cleaning of prize homes, and perform administrative tasks."
    },
    {
      year: "2013-2018",
      title: "Pharmacy Assistant",
      institution: "Cabarita Pharmacy",
      description: "I processed prescriptions, delivered medication, and assisted in training new staff."
    },
    {
      year: "2004-2016",
      title: "Education",
      institution: "Somerset College",
      description: "Graduated magna cum laude from Somerset College, completing my education from preschool through Grade 12."
    },
  ];

  // State to manage visibility of additional experiences and descriptions
  const [showMore, setShowMore] = useState(false);
  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Container fluid id="my-experience" className="my-experience-container">
      {/* Centered Title */}
      <Row className="justify-content-center text-center">
        <Col>
          <h1 id="experience-page-title">EDUCATION AND EXPERIENCE</h1>
          <div className="resume-links">
            <a id="my-resume-text" href="/resume.pdf" target="blank">My Resume</a>
            <a id="resume-link" href="/resume.pdf" target="blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </Col>
      </Row>

      {/* Experience List */}
      <Row className="justify-content-center experience-content">
        {experiences.slice(0, showMore ? experiences.length : 3).map((exp, index) => (
          <Row key={index} className="experience-row align-items-center mb-4" style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <Col md={6} className="text-right">
              <h3 className="experience-year">{exp.year}</h3>
            </Col>
            <Col md={6} className='experience-text'>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-institution">{exp.institution}</p>
              {showDescription[index] && <p className="experience-description">{exp.description}</p>}
              <Button id="description-button" variant="link" onClick={() => toggleDescription(index)}>
                {showDescription[index] ? 'Hide Description' : 'Show Description'}
              </Button>
            </Col>
          </Row>
        ))}
      </Row>

      {/* See More Button and Projects */}
      {experiences.length > 3 && (
        <Row className="justify-content-center mb-5">
          <Col className="text-center">
            <Button id="full-history-button" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'My Full History'}
            </Button>
            <Button id="my-projects-button" as={Link} to="/projects" variant="outline-dark" size="m">
              My Projects
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MyExperience;
