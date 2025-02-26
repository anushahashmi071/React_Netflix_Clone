import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Card1 from "./Card.jsx";
import FAQ from "./FAQ.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <Row>
          <Col>
            <Card1 />
            <FAQ />
            <Form />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}
