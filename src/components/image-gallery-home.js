import Carousel from "react-bootstrap/Carousel";
import refinery from "./srcs/refinery.jpg";
import shipping from "./srcs/shipping.jpg";
import trading from "./srcs/trading.jpg";
import "./styles/imagegallery.css";
function ImageGallery() {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel">
          <img className="d-block w-100" src={shipping} alt="First slide" />
          <Carousel.Caption className="caption">
            <h3 className="caption-heading">Shipping</h3>
            <p className="caption-text">
              We provide a single network of subsidiaries and partners in the seven seas
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={trading} alt="Second slide" />

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
              We provide services in various oil and gas channels
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageGallery;
