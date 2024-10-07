import { Row, Col, Image, Button } from 'react-bootstrap';



const Home = () => {
  return (
    <div className="banner">
      <Row className="align-items-center h-100"> 
        <Col md={8} className="text-center"> 
          <h1>XANTHIA MASON</h1>
          <h2>Junior Full Stack Web Developer</h2>
          <Button id="about-me-button" href="#about-me" size="m">About Me</Button>
        </Col>
        <Col id="profile" md={3}> 
          <Image
            src="/testg2.jpg" 
            id="profile-image"
            alt="Banner"
            className="img-fluid" 
          />
        </Col>
      </Row>
    </div>

  )
}

export default Home