import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";

function FAQ() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Frequently Asked Questions</h3>
          <Accordion className="accordion">
            <Accordion.Item eventKey="0" className="accordion-item">
              <Accordion.Header className="accordion-header">
                What is Netflix?
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV show, movies, anime, documentaries, and more on
                thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want without a
                single commercial - all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accordion-item">
              <Accordion.Header className="accordion-header">
                How much does Netflix cost?
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                Watch Netflix on your smartphone, tablet, Smart Tv, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from Rs 250 to Rs 1,100 a month. No extra costs, no contacts.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="accordion-item">
              <Accordion.Header className="accordion-header">
                Where can I watch?
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets, streming
                media players and game consoles.
                <br />
                <br />
                You can also download your favorite shows with the iOS or
                Android app. Use downloads to watch while you're on the go and
                without an internet connection. Take Netflix with you anywhere.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="accordion-item">
              <Accordion.Header className="accordion-header">
                How do I cancel?
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees - start ot stop your
                account anytime.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="accordion-item">
              <Accordion.Header className="accordion-header">
                What can I do on Netflix?
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="accordion-item">
              <Accordion.Header className="accordion-header">
                Is Netflix good for childern?
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                The Netflix Kids experience is included in your membership to
                give parents control while kids anjoy family-friendly TV shows
                and movies in their own space.
                <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don't want kids to see.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
