import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormSection from "./Form.jsx"
import "./Banner.css";

function Banner() {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col className="p-0 m-0">
          <div className="banner-text">
          <div className="banner-bg-color"></div>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Starts ar Rs250. Cancel anytime.</h3>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
          <FormSection/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Banner;
