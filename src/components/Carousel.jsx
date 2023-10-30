import { Col, Container, Row, Carousel } from "react-bootstrap";
import armchairs from "../assets/armchairs.jpg";
import blackboard from "../assets/blackboard.jpg";
import meeting from "../assets/meeting-room.jpg";

export default function PicCarousel () {

  return (
    <section className="carousel-bg">
      <Container className="carousel-container">
        <Row>
          <Col className="carousel-body">
            <Carousel className="test">
              <Carousel.Item>
                <img src={meeting}
                className="d-block w-100 scale-image"
                alt="slide 1" />
                <Carousel.Caption>
                
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img src={blackboard} 
                className="d-block w-100 clock-image"
                alt="slide 2" />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img src={armchairs} alt="slide 3"/>
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

              {/* <Carousel.Item>
                <img src="" 
                className="d-block w-100 counter-image"
                alt="slide 4" />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item> */}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}