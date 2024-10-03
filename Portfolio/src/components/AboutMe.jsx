import { Container } from 'react-bootstrap';
import IceBreaker from "./IceBreaker"

const AboutMe = () => {
  return (
    <Container fluid className="about-me-container">
        <h1>ABOUT ME. . .</h1>
        <p className='about-me-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum dolores laudantium quam quae ut fuga rerum illum velit itaque perspiciatis odio error quia architecto placeat consequatur quisquam facilis laborum fugiat ullam commodi quod magni, illo sit! Consequatur adipisci iusto explicabo sed hic voluptatum maxime soluta minus voluptatem. Doloribus, placeat!</p>
        <p className='about-me-text'>Get to know me a little with 2 Truths and a Lie...</p>  {/* Add a title for the ice breaker quiz */}
        
        <IceBreaker/> 
    </Container>
    
  )
}

export default AboutMe