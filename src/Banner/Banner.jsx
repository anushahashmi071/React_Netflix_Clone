import FormSection from "../Form/Form.jsx";
import "./Banner.css";
import backgroundImg from "../assets/background-img.jpg";
import Card from "react-bootstrap/Card";

function Banner() {
  return (
    <Card className="banner-text">
      <Card.Img src={backgroundImg} alt="Background Image" className="bg-img" />
      <div className="banner-bg-color"></div>
      <Card.ImgOverlay className="banner-content">
        <Card.Title className="card-title">
          Unlimited movies, TV shows, and more
        </Card.Title>
        <Card.Text className="card-subtitle">
          Starts ar Rs250. Cancel anytime.
        </Card.Text>
        <Card.Text className="card-description">
          Ready to watch? Enter your email to create or restart your membership.
        </Card.Text>
        <FormSection />
      </Card.ImgOverlay>
    </Card>
  );
}

export default Banner;
