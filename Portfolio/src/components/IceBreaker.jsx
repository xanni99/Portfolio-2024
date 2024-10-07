import { useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEarthAmericas, faLanguage } from '@fortawesome/free-solid-svg-icons';

const IceBreaker = () => {
    // State to track whether each card is flipped or not
    const [flipped, setFlipped] = useState([false, false, false]);

    // Function to handle card flip
    const handleFlip = (index) => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    };

    return (
        <Container fluid className="ice-breaker-container">
            <Row className="justify-content-center">
                {/* Card 1 */}
                <Col md={4} className="my-3 d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <FontAwesomeIcon className="icons" icon={faLocationDot} size="5x" style={{ color: '' }} />
                            <Card.Text className="card-text">
                                {flipped[0] ? "This is true!" : "I was born on the Gold Coast."}
                            </Card.Text>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" onClick={() => handleFlip(0)}>
                                    {flipped[0] ? "Show Fact" : "Reveal"}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Card 2 */}
                <Col md={4} className="my-3 d-flex justify-content-center">
                    <Card style={{ width: '20rem' }}>
                        <Card.Body className="text-center">
                            <FontAwesomeIcon className="icons" icon={faLanguage} size="5x" style={{ color: '' }} />
                            <Card.Text className="card-text">
                                {flipped[1] ? "This is false! - Unless you count programming languages ;)" : "I can speak more than one language."}
                            </Card.Text>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" onClick={() => handleFlip(1)}>
                                    {flipped[1] ? "Show Fact" : "Reveal"}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Card 3 */}
                <Col md={4} className="my-3 d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <FontAwesomeIcon className="icons" icon={faEarthAmericas} size="5x" style={{ color: '' }} />
                            <Card.Text className="card-text">
                                {flipped[2] ? "This is true!" : "I have traveled to over 30 countries."}
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleFlip(2)}>
                                {flipped[2] ? "Show Fact" : "Reveal"}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default IceBreaker;
