import { Row, Col, Image, Button } from 'react-bootstrap';



const Home = () => {
  return (
    <div className="banner">
      <Row className="align-items-center h-100"> 
        <Col md={7} className="text-center"> 
          <h1>XANTHIA MASON</h1>
          <h2>Junior Full Stack Web Developer</h2>
          <Button id="about-me-button" variant="outline-light" size="sm">About Me</Button>
        </Col>
        <Col md={4} id="profile-image"> 
          <Image
            src="/test6.jpg" 
            alt="Banner"
            className="img-fluid" 
          roundedCircle/>
        </Col>
      </Row>
    </div>

  )
}

export default Home