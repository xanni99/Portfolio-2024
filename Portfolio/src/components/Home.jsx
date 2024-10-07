import { Container, Dropdown, DropdownButton } from 'react-bootstrap'; // Import necessary Bootstrap components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import StarBackground from './StarBackground'; // Assuming you renamed it
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="home-page">
      <StarBackground /> {/* Use the StarBackground component */}
      <Container id="home-text" fluid>
        <h1>XANTHIA MASON</h1>
        <p>Junior Full Stack Web Developer</p>

        {/* Dropdown Menu for Navigation */}
        <Dropdown id="dropdown">
          <DropdownButton id="dropdown-basic-button" title="Learn More" variant="outline-light">
            <Dropdown.Item as={Link} to="/about-me">About Me</Dropdown.Item>
            <Dropdown.Item as={Link} to="/experience">My Experience</Dropdown.Item>
            <Dropdown.Item as={Link} to="/projects">My Projects</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </Container>
      <Container id="home-links" fluid>
        {/* Social Media Icons */}
        <a href="https://github.com/xanni99" target="_blank">
          <FontAwesomeIcon id="github-icon" icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/xanthia-mason/" target="_blank">
        <FontAwesomeIcon id="linkedin-icon" icon={faLinkedin} size="2x" />
        </a>
          
      </Container>
    </div>
  );
};

export default Home;
