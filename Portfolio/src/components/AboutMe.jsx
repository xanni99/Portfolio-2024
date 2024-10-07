import { Container, Button } from 'react-bootstrap';
import IceBreaker from "./IceBreaker"

const AboutMe = () => {
  return (
    <Container fluid className="about-me-container" id='about-me'>
        <h1>ABOUT ME. . .</h1>
        <p className='about-me-text'>I’m a junior full stack web developer with a passion for both back-end functionality and front-end creativity. While I find myself more naturally adept at back-end development, I still enjoy the challenges and artistic aspects of front-end work. I am excited to continue growing my skills in botth of these areas and thrive in team environments. Outside of coding, I like to stay active with different outdoor adventures and love exploring new places through travel.</p>
        <h5 className='about-me-text'>Get to know me a little more with 2 Truths and a Lie...</h5>  
        <IceBreaker/> 
        <Button id="my-experience-button" href="#my-experience" variant="outline-dark" size="m">My Experience</Button>
    </Container>
    
  )
}

export default AboutMe