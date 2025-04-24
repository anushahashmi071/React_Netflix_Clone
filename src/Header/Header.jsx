import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../public/logo.svg"
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar className="header">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="100"
              height="100"
              alt="Netflix logo"
            />
          </Navbar.Brand>
          <Button variant="danger" type="submit">
            Sign In
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
