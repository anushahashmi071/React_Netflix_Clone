import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import './Form.css'

function FormSection() {
  return (
    <Form className="form-section">
      <Form.Group controlId="formGroupEmail">
        <Form.Control type="email" className='form-input' />
        <Form.Label className='form-label'>Email address</Form.Label>
      </Form.Group>
     
      <Button variant="danger" type="submit"className='btn'>
        Get Started
      <FaArrowRight className='arrow-icon' />
      </Button>
    </Form>
  );
}

export default FormSection;