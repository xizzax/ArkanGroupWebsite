import Carousel from "react-bootstrap/Carousel";
import chairman from "./srcs/chairman.png";
import logo from "./srcs/logo.png";
import refinery from "./srcs/refinery.jpg";
import "./styles/imagegallery.css";
function ImageGallery() {
  return (
    <div className="gallery-div">
      <Carousel>
        <Carousel.Item className="carousel">
          <img className="d-block w-100" src={refinery} alt="First slide" />
          <Carousel.Caption className="caption">
            <h3 className="caption-heading">Shipping</h3>
            <p className="caption-text">
              We provide a single network of subsidiaries and partners in the seven seas
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={refinery} alt="Second slide" />

          <Carousel.Caption className="caption">
            <h3 className="caption-heading">Trading</h3>
            <p className="caption-text">
              Local and international suppliers coming together to form a global business solution
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={refinery} alt="Third slide" />

          <Carousel.Caption className="caption">
            <h3 className="caption-heading">Energy Sector</h3>
            <p className="caption-text">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageGallery;
