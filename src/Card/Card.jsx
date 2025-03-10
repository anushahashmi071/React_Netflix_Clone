import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaDesktop } from "react-icons/fa6";
import { BsArrowDownShort } from "react-icons/bs";
import { GoTelescope } from "react-icons/go";
import { LuSquareUser } from "react-icons/lu";
import "./Card.css";

export default function Card1() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>More Reasons to Join</h3>
          <div className="d-flex gap-3 flex-wrap">
            <Card style={{ width: "16.5rem" }}>
              <Card.Body className="card-content">
                <Card.Subtitle className="mb-2 text-light">
                  Enjoy on your TV
                </Card.Subtitle>
                <Card.Text className="card-text">
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blue-ray players, and more.
                </Card.Text>
                <div className="icon">
                  <div className="icon-box">
                    <FaDesktop className="card-icon" />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "16.5rem" }}>
              <Card.Body className="card-content">
                <Card.Subtitle className="mb-2 text-light">
                  Download your shows to watch offline
                </Card.Subtitle>
                <Card.Text className="card-text">
                  Save your favorites easily and always have something to watch.
                </Card.Text>
                <div className="icon">
                  <div className="icon-box">
                    <BsArrowDownShort className="card-icon" />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "16.5rem" }}>
              <Card.Body className="card-content">
                <Card.Subtitle className="mb-2 text-light">
                  Watch everywhere
                </Card.Subtitle>
                <Card.Text className="card-text">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </Card.Text>
                <div className="icon">
                  <div className="icon-box">
                    <GoTelescope className="card-icon" />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "16.5rem" }}>
              <Card.Body className="card-content">
                <Card.Subtitle className="mb-2 text-light">
                  Create profiles for kids
                </Card.Subtitle>
                <Card.Text className="card-text">
                  Send kids on adventures with their favorite characters in a
                  space made just for them - free with your membership.
                </Card.Text>
                <div className="icon">
                  <div className="icon-box">
                    <LuSquareUser className="card-icon" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
