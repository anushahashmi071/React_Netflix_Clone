import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import translateImg from "../assets/translate.png";
import "./Footer.css";

export default function Footer() {
  return (
    <Container className="sec-footer">
      <a href="">Question ? Contact Us</a>
      <ul className="footer-links">
        <li>
          <a href="">FAQ</a>
          <a href="">Help Center</a>
          <a href="">Account</a>
          <a href="">Media Center</a>
          <a href="">Investor Relation</a>
          <a href="">Jobs</a>
          <a href="">Way to Watch</a>
          <a href="">Terms of Use</a>
          <a href="">Privacy</a>
          <a href="">Cookies Preferences</a>
          <a href="">Corporator Information</a>
          <a href="">Contact Us</a>
          <a href="">Speed Test</a>
          <a href="">Legal Notice</a>
          <a href="">Only on Netflix</a>
        </li>
      </ul>

      <div className="footer-bottom">
        <img src={translateImg} alt="" />
        <Form.Select
          className="form-select"
          aria-label="Default select example"
        >
          <option value="1">English</option>
        </Form.Select>
      </div>
      <a href="" className="netflixPk">Netflix Pakitsan</a>
    </Container>
  );
}
