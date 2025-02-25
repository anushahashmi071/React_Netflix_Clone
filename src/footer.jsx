import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function Footer() {
  const data = [
    { a: "FAQ" },
    { a: "Help Center" },
    { a: "Account" },
    { a: "Media Center" },
    { a: "Investor Relation" },
    { a: "Jobs" },
    { a: "Way to Watch" },
    { a: "Terms of Use" },
    { a: "Privacy" },
    { a: "Cookies Preferences" },
    { a: "Corporator Information" },
    { a: "Contact Us" },
    { a: "Speed Test" },
    { a: "Legal Notice" },
    { a: "Only on Netflix" },
  ];
  return (
    <Container className="sec-footer">
      <a href="">Question ? Contact Us</a>
      <ul className="footer-links d-flex flex-wrap row-gap-3 p-0">
        {data.map((e) => (
          <li>
            <a href="">{e.a}</a>
          </li>
        ))}
      </ul>

      <Form.Select className="form-select" aria-label="Default select example">
        <option value="1">English</option>
      </Form.Select>
      <a href="">Netflix Pakitsan</a>
    </Container>
  );
}
